import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { UserService } from "../../Servicios/Usuario/user.service";
import { NavegadorComponent } from "../navegador/navegador.component";
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; // Importación de NgBootstrap Modal (si estás usando NgBootstrap)

@Component({
  selector: 'app-iniciosesion',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NavegadorComponent, RouterLink],
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.scss']
})
export class IniciosesionComponent {
  formUser: FormGroup;
  showError: boolean = false;

  constructor(
    private fb: FormBuilder, 
    private userService: UserService, 
    private router: Router, 
  ) {
    this.formUser = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  ngOnInit(): void {}

  enviar() {
    const { username, password } = this.formUser.value; // Obtener los valores del formulario
    this.userService.login(username, password).subscribe({
      next: (response) => {
        console.log('Inicio de sesión exitoso:', response);
        // Guarda la sesión o token si es necesario
        this.router.navigate(['/private/consulta']); // Redirigir después de iniciar sesión
      },
      error: (error) => {
        
        console.error('Error en el inicio de sesión:', error);
        
        // Maneja el error, por ejemplo, mostrando un mensaje al usuario
          
        if (error.status === 302) {
          // Manejo de redirección si es necesario
          this.router.navigate(['/login']); // O la ruta deseada
        }  
        this.showError = true;   
      }
    });
  }
  
}