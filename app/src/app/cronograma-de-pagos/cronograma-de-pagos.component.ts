import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {UserService} from "../../Servicios/Usuario/user.service";
import {NavegadorComponent} from "../navegador/navegador.component";


@Component({
  selector: 'app-cronograma-de-pagos',
  standalone: true,
  imports: [],
  templateUrl: './cronograma-de-pagos.component.html',
  styleUrl: './cronograma-de-pagos.component.scss'
})
export class CronogramaDePagosComponent {
  constructor(private router: Router) {}

  continue() {
    this.router.navigate(['/private/consulta/prestamo/cronograma/bien']);
  }

  continue2() {
    this.router.navigate(['/private/consulta/prestamo']);
  }
}
