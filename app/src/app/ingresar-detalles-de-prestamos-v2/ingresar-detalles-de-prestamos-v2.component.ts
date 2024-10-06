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
  // Método para validar que solo se ingresen números
  validateInput(event: KeyboardEvent) {
    const keyCode = event.keyCode ? event.keyCode : event.which;

    // Solo permitir números (0-9)
    if (keyCode < 48 || keyCode > 57) {
      event.preventDefault();
    }
  }

  // Método para validar que el número ingresado sea positivo
  validatePositive(event: any) {
    const input = event.target.value;

    // Si el número es negativo, se borra el valor y se muestra alerta
    if (parseFloat(input) < 0) {
      event.target.value = '';
      alert('Por favor, ingrese un número positivo.');
    }
  }
  constructor(private router: Router) {}

  continue() {
    this.router.navigate(['/private/consulta/prestamo/cronograma']);
  }

  continue2() {
    this.router.navigate(['/private/consulta']);
  }
}
