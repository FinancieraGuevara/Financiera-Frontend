import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import {MatSnackBarModule,MatSnackBar} from '@angular/material/snack-bar';
import { AuthService } from "../../../core/services/auth/auth.service";

@Component({
  selector: 'app-iniciosesion',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.scss']
})
export class IniciosesionComponent {
  loginForm: FormGroup;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private snackbar = inject(MatSnackBar);
  private authService = inject(AuthService); // Importar el servicio de autenticación

  constructor() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }


  onSubmit() {
    if (this.loginForm.valid) {
      const data = this.loginForm.value;

      this.authService.login(data).subscribe({
        next: () => {
          const role = this.authService.getRole();
          if (role === 'ROLE_OWNER') {
            this.router.navigate(['/owner/historial-prestamos']);
          } else if (role === 'ROLE_SEDE') {
            this.router.navigate(['/sede/historial-prestamos']);
          }
          this.showSnackbar('Sesión iniciada correctamente');
        },
        error: (error) => {
          this.showSnackbar(error.error);
        }
      });
        
    }

  }

  private showSnackbar(message: string) {
    this.snackbar.open(message, 'Cerrar', {
      duration: 2000,
      verticalPosition : 'top'
    });
  }
  
}