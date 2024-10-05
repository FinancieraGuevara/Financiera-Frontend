import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeleccionarTipoPrestamoComponent } from './seleccionar-tipo-prestamo/seleccionar-tipo-prestamo.component';
import { ValidarInformacionComponent } from "./validar-informacion/validar-informacion.component";
import { IngresarDetallePrestamoComponent } from "./ingresar-detalle-prestamo/ingresar-detalle-prestamo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SeleccionarTipoPrestamoComponent, ValidarInformacionComponent, IngresarDetallePrestamoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
}
