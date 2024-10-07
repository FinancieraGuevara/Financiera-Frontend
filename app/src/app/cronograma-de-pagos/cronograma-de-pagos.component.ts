import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { DetallePrestamo } from '../../Clases/detallePrestamo/detalle-prestamo'; // Asegúrate de importar la clase DetallePrestamo

@Component({
  selector: 'app-cronograma-de-pagos',
  standalone: true,
  imports: [CommonModule], // Agrega CommonModule a los imports
  templateUrl: './cronograma-de-pagos.component.html',
  styleUrls: ['./cronograma-de-pagos.component.scss']
})
export class CronogramaDePagosComponent implements OnInit {
  ultimoDetallePrestamo: DetallePrestamo | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const ultimoDetalle = localStorage.getItem('ultimoDetallePrestamo');
    if (ultimoDetalle) {
      this.ultimoDetallePrestamo = JSON.parse(ultimoDetalle);
      console.log('Último detalle del préstamo:', this.ultimoDetallePrestamo);
    } else {
      console.error('No se encontró el último detalle del préstamo en el localStorage.');
    }
  }

  continue() {
    this.router.navigate(['/private/consulta/prestamo/cronograma/bien']);
  }

  continue2() {
    this.router.navigate(['/private/consulta/prestamo']);
  }
}