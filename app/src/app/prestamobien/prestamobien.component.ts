import { Component } from '@angular/core';
import { Prestamo } from '../../Clases/Prestamo/prestamo';
import { Router } from 'express';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-prestamobien',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './prestamobien.component.html',
  styleUrls: ['./prestamobien.component.scss']
})
export class PrestamobienComponent {
  // prestamo: Prestamo = new Prestamo(0); // Inicializar con un valor por defecto

  // constructor() {
  //   const prestamoData = localStorage.getItem('prestamo');
  //   if (prestamoData) {
  //     this.prestamo = JSON.parse(prestamoData);
  //   }
  // }

  // get monto(): number {
  //   return this.prestamo.monto;
  // }
}