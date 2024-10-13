import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Prestamo } from '../../Clases/Prestamo/prestamo';
import { Router } from '@angular/router';
import {NavegadorComponent} from "../navegador/navegador.component";



@Component({
  selector: 'app-prestamobien',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './prestamobien.component.html',
  styleUrls: ['./prestamobien.component.scss']
})
export class PrestamobienComponent {
  constructor(
    private router: Router
  )
  {}
  volver(): void {
    this.router.navigate(['/private/historialprestamos']);
  }
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