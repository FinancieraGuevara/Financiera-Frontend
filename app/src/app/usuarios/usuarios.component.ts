import { Component,OnInit  } from '@angular/core';
import {UserService} from '../../Servicios/Usuario/user.service'
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../../Clases/Users/user';
@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  users: User[] = [];
  
  constructor(private userService: UserService, private router: Router) {}

  isLoading = true; // Agrega esta variable

  ngOnInit(): void {
    this.userService.getPrivateUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.isLoading = false; // Oculta el loader
        console.log('Usuarios privados:', data);
      },
      error: (error) => {
        this.isLoading = false; // Oculta el loader en caso de error
        console.error('Error obteniendo usuarios privados:', error);
        if (error.status === 401 || error.status === 403) {
          this.router.navigate(['/login']); // Redirige al login
        }
      }
    });
  }
 // Método para cerrar sesión
 cerrarSesion() {
        this.userService.logout().subscribe({
            next: () => {
                console.log('Sesión cerrada');
                this.router.navigate(['/login']);
                window.location.reload(); // Recargar la página después de cerrar sesión
            },
            error: (error) => {
                console.error('Error al cerrar sesión:', error);
            }
        });
    }
}