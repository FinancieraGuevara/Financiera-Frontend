import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeleccionarTipoPrestamoComponent } from './seleccionar-tipo-prestamo/seleccionar-tipo-prestamo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SeleccionarTipoPrestamoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
}
