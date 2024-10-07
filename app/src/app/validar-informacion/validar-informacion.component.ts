import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SolicitanteService} from '../../Servicios/Solicitante/solicitante.service'
import { Router, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{Solicitante} from '../../Clases/Solicitante/solicitante'
import { FormsModule } from '@angular/forms';

import { responseSolicitante } from './responseSolicitante';
import {NavegadorComponent} from "../navegador/navegador.component";


@Component({
  selector: 'app-validar-informacion',
  standalone: true,
  imports: [CommonModule,RouterOutlet, FormsModule],
  templateUrl: './validar-informacion.component.html',
  styleUrl: './validar-informacion.component.scss'
  
})
export class ValidarInformacionComponent {
  showError: boolean = false;
  dni: string;
  solicitanteData: Solicitante; 
  isLoading = true; 
  prestamoForm: FormGroup;
  fb: FormBuilder;
  constructor(private solicitanteService: SolicitanteService, private router: Router, private formBuilder: FormBuilder) {
    this.fb = formBuilder; // Inicializa fb aquí
    this.prestamoForm = this.fb.group({
      monto: [null, [Validators.required, Validators.min(500), Validators.pattern("^[0-9]*$")]],
      cuotas: [null] // Asegúrate de que la propiedad cuotas esté en tu formulario si la usas
    });
  }
  
  buscar() {
      if (this.dni) {
          this.solicitanteService.getDataById(this.dni, 'dni').subscribe({
              next: (response: responseSolicitante<Solicitante>) => { // Asegúrate de que response es de tipo responseSolicitante
                    this.isLoading = false;
                    console.log('Respuesta de la API:', response); // Verifica la estructura real de la respuesta
                   // Oculta el loader
                  if (response && response.data) {
                      this.solicitanteData = response.data; // Ahora puedes asignar data a solicitanteData
                      console.log('Datos del solicitante:', this.solicitanteData); // Para verificar
                  } else {
                    this.isLoading = false;
                    alert("ERROR AL OBTENER LOS DATOS")
                      console.error('No se encontraron datos en la respuesta');          
                  }
              },
              error: (error) => {
               
                  console.error('Error obteniendo los datos del solicitante', error);
                  alert("ERROR DATOS NO EXISTEN")
              }
          });
      }
  }
  
  validateNumber(event: KeyboardEvent): void {
    const charCode = event.key.charCodeAt(0);
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }
  continue() {
    if (this.solicitanteData) {
      localStorage.setItem('dniSolicitante', this.dni); 
      console.log("datos guardados",localStorage.getItem('dniSolicitante'));
      this.router.navigate(['/private/consulta/prestamo']);
    } else {
      alert('Por favor, busca un DNI válido antes de continuar.');
    }
  }

}