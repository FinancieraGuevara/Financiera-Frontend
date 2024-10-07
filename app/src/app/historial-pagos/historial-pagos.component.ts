import { Component } from '@angular/core';
import { DetallePrestamo } from '../../Clases/detallePrestamo/detalle-prestamo';
import { DetallePrestamoService } from '../../Servicios/detallePrestamo/detalle-prestamo.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-historial-pagos',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './historial-pagos.component.html',
  styleUrl: './historial-pagos.component.scss'
})
export class HistorialPagosComponent {
  detallePrestamos: DetallePrestamo[];

  constructor(private detallePrestamoService: DetallePrestamoService) {}

  ngOnInit():void {
    this.obtenerDetallePrestamos();
  }

  obtenerDetallePrestamos(): void {
    console.log('Iniciando obtención de detalles de préstamos...');
    this.detallePrestamoService.getAllDetallePrestamos().subscribe(
      (detallePrestamo) => {
        this.detallePrestamos = detallePrestamo;
        console.log('Detalles de préstamos obtenidos:', this.detallePrestamos);
      },
      (error) => {
        console.error('Error al obtener los detalles de préstamos:', error);
      }
    );
  }

  mostrarDetalle(detallePrestamo: DetallePrestamo): void {
    // Implementa la lógica para mostrar el detalle del préstamo aquí
    console.log('Detalle del préstamo:', detallePrestamo);
  }
}
