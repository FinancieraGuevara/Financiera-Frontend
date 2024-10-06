import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeleccionarTipoPrestamoComponent } from './seleccionar-tipo-prestamo/seleccionar-tipo-prestamo.component';
import { ValidarInformacionComponent } from "./validar-informacion/validar-informacion.component";
import { IngresarDetallePrestamoComponent } from "./ingresar-detalle-prestamo/ingresar-detalle-prestamo.component";
import {IniciosesionComponent} from "./iniciosesion/iniciosesion.component";
import {PiepaginaComponent} from "./piepagina/piepagina.component";
import {NavegadorComponent} from "./navegador/navegador.component";
import {PrestamobienComponent} from "./prestamobien/prestamobien.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SeleccionarTipoPrestamoComponent, ValidarInformacionComponent, IngresarDetallePrestamoComponent,IniciosesionComponent, PiepaginaComponent, NavegadorComponent, PrestamobienComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Financiera Guevara';
}
