import {Router, RouterLink} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
@Component({
  selector: 'app-ingresar-detalles-de-prestamos-v2',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ingresar-detalles-de-prestamos-v2.component.html',
  styleUrl: './ingresar-detalles-de-prestamos-v2.component.scss'
})
export class IngresarDetallesDePrestamosV2Component {
  
  dniSolicitante: string | null = localStorage.getItem('dniSolicitante');
  isInputValid: boolean = false;
  isConfirmButtonDisabled: boolean = true;
  monto: number = 0;
  selectedTimeButton: string = '';
  prestamoForm: FormGroup;
  showError: boolean = false;
  constructor(private fb: FormBuilder , private router : Router) {}

  ngOnInit(): void {
    this.prestamoForm = this.fb.group({
      monto: [null, [Validators.required, Validators.min(500), Validators.pattern("^[0-9]*$")]], // Solo números
    });
  }

  selectTime(time: string): void {
    this.selectedTimeButton = time;
    this.prestamoForm.patchValue({ time });
  }
  
  validateInput(event: KeyboardEvent): void {
    const inputChar = String.fromCharCode(event.keyCode);
    if (!/[0-9]/.test(inputChar)) {
      event.preventDefault();
    }
  }
  onSubmit(): void {
    if (this.prestamoForm.valid) {
      const formValues = this.prestamoForm.value;
      console.log(formValues);
    }
  }
 
  continue() {
    this.monto = this.prestamoForm.get('monto')?.value; // Captura el valor del monto
    console.log(`Monto: ${this.monto}, Cuotas: ${this.selectedTimeButton}`);
    this.router.navigate(['/private/consulta/prestamo/cronograma']);
  }

  volver() {
    this.router.navigate(['/private/consulta']);
  }
}
