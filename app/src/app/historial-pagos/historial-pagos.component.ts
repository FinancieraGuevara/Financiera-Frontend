import { Component } from '@angular/core';
import { DetallePrestamo } from '../../Clases/detallePrestamo/detalle-prestamo';
import { DetallePrestamoService } from '../../Servicios/detallePrestamo/detalle-prestamo.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial-pagos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historial-pagos.component.html',
  styleUrl: './historial-pagos.component.scss'
})
export class HistorialPagosComponent {
  detallePrestamos: DetallePrestamo[];
  finalizados: boolean[];
  detalleSeleccionado: DetallePrestamo | null = null;


  constructor(private detallePrestamoService: DetallePrestamoService, private router: Router) {}

  ngOnInit():void {
    this.obtenerDetallePrestamos();
  }

  obtenerDetallePrestamos(): void {
    console.log('Iniciando obtención de detalles de préstamos...');
    this.detallePrestamoService.getAllDetallePrestamos().subscribe(
      (detallePrestamo) => {
        this.detallePrestamos = detallePrestamo;
        this.finalizados = this.cargarEstadosFinalizados();
        console.log('Detalles de préstamos obtenidos:', this.detallePrestamos);
      }
    );
  }

  mostrarDetalle(detallePrestamo: DetallePrestamo): void {
    this.detalleSeleccionado = detallePrestamo;
    console.log('Detalle del préstamo:', detallePrestamo);
  }

  realizarPrestamo(){
    this.router.navigate(['/private/consulta']);
  }

  finalizarPrestamo(index: number): void {
    this.finalizados[index] = true;
    this.guardarEstadosFinalizados();
  }

  // Método para guardar los estados finalizados en localStorage
  guardarEstadosFinalizados(): void {
    localStorage.setItem('finalizados', JSON.stringify(this.finalizados));
  }

  // Método para cargar los estados finalizados desde localStorage
  cargarEstadosFinalizados(): boolean[] {
    const estadosGuardados = localStorage.getItem('finalizados');
    if (estadosGuardados) {
      return JSON.parse(estadosGuardados);  // Si existen estados guardados, los cargamos
    } else {
      // Si no hay nada en localStorage, inicializamos con todos en falso
      return new Array(this.detallePrestamos.length).fill(false);
    }
  }
  cerrarSesion() {
    this.detallePrestamoService.logout().subscribe({
        next: (response) => {
            console.log('Sesión cerrada:', response);
            this.router.navigate(['/login']);
        },
        error: (error) => {
            console.error('Error al cerrar sesión:', error);
          
        }
    });
  }
}
