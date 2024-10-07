import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {UserService} from "../../Servicios/Usuario/user.service";
import {NavegadorComponent} from "../navegador/navegador.component";

@Component({
  selector: 'app-ingresar-detalles-de-prestamos-v2',
  standalone: true,
  imports: [],
  templateUrl: './ingresar-detalles-de-prestamos-v2.component.html',
  styleUrl: './ingresar-detalles-de-prestamos-v2.component.scss'
})
export class IngresarDetallesDePrestamosV2Component {
  inputValue: number = 0;
  isInputValid: boolean = false;
  selectedTimeButton: string | null = null;
  isConfirmButtonDisabled: boolean = true;

  validateInput(event: KeyboardEvent) {
    const charCode = event.charCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

  validatePositive(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = parseFloat(input.value);
    this.inputValue = value;

    this.isInputValid = value >= 500 && value <= 50000;
    this.updateConfirmButtonState();
  }

  selectTime(button: string) {
    if (this.selectedTimeButton === button) {
      this.selectedTimeButton = null;
    } else {
      this.selectedTimeButton = button;
    }
    this.updateConfirmButtonState();
  }

  updateConfirmButtonState() {
    this.isConfirmButtonDisabled = !(this.isInputValid && this.selectedTimeButton !== null);
  }
  constructor(private router: Router) {}

  continue() {
    this.router.navigate(['/private/consulta/prestamo/cronograma']);
  }

  continue2() {
    this.router.navigate(['/private/consulta']);
  }
}
