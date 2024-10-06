import { Component,OnInit  } from '@angular/core';
import {UserService} from '../../../Servicios/Usuario/user.service'
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../../../Clases/Users/user';
@Component({
  selector: 'app-publicusers',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './publicusers.component.html',
  styleUrl: './publicusers.component.scss'
})
export class PublicusersComponent {
  users: User[] = [];
  isLoading = true; // Agrega esta variable
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getPublicUsers().subscribe({
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
  public IniciarSesion()
  {
    this.router.navigate(['/login']);
  }
}
