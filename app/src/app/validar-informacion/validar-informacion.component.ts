import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SolicitanteService} from '../../Servicios/Solicitante/solicitante.service'
import { Router, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{Solicitante} from '../../Clases/Solicitante/solicitante'
import { FormsModule } from '@angular/forms';
import { responseSolicitante } from './responseSolicitante'; 

@Component({
  selector: 'app-validar-informacion',
  standalone: true,
  imports: [CommonModule,RouterOutlet, FormsModule],
  templateUrl: './validar-informacion.component.html',
  styleUrl: './validar-informacion.component.scss'
})
export class ValidarInformacionComponent {

  dni: string;
  solicitanteData: Solicitante; // Aquí usas el tipo Solicitante directamente
  
  constructor(
    private solicitanteService: SolicitanteService, 
    private router: Router
  ) {}

  buscar() {
      if (this.dni) {
          this.solicitanteService.getDataById(this.dni, 'dni').subscribe({
              next: (response: responseSolicitante<Solicitante>) => { 
                  console.log('Respuesta de la API:', response);  
                      this.solicitanteData = response.data;
                      console.log('Datos del solicitante:', this.solicitanteData);           
                     
              },
              error: (error) => {
                  console.error('Error obteniendo los datos del solicitante', error);
              }
          });
      }
  }

  // Método para enviar el formulario
  enviar() {
    if (this.solicitanteData) {
      localStorage.setItem('dniSolicitante', this.dni); 
      this.router.navigate(['/private/detallePrestamo']); 
    } else {
      alert('Por favor, busca un DNI válido antes de continuar.');
    }
  }
  validateNumber(event: KeyboardEvent): void {
    const charCode = event.key.charCodeAt(0);
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

}
