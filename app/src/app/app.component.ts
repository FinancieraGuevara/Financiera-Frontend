import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeleccionarTipoPrestamoComponent } from './seleccionar-tipo-prestamo/seleccionar-tipo-prestamo.component';
import { ValidarInformacionComponent } from "./validar-informacion/validar-informacion.component";
import { IngresarDetallePrestamoComponent } from "./ingresar-detalle-prestamo/ingresar-detalle-prestamo.component";
import {IniciosesionComponent} from "./iniciosesion/iniciosesion.component";
import {PiepaginaComponent} from "./piepagina/piepagina.component";
import {NavegadorComponent} from "./navegador/navegador.component";
import { CronogramaDePagosComponent } from "./cronograma-de-pagos/cronograma-de-pagos.component";
import { IngresarDetallesDePrestamosV2Component } from "./ingresar-detalles-de-prestamos-v2/ingresar-detalles-de-prestamos-v2.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SeleccionarTipoPrestamoComponent, ValidarInformacionComponent, IngresarDetallePrestamoComponent, IniciosesionComponent, PiepaginaComponent, NavegadorComponent, CronogramaDePagosComponent, IngresarDetallesDePrestamosV2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Financiera Guevara';
}
