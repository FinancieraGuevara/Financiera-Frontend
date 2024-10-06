import { Component } from '@angular/core';
import { PrestamoService, PrestamoRequestDTO, PrestamoResponseDTO } from '../../Servicios/Prestamo/prestamo.service';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-ingresar-detalle-prestamo',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './ingresar-detalle-prestamo.component.html',
  styleUrls: ['./ingresar-detalle-prestamo.component.scss']
})
export class IngresarDetallePrestamoComponent {
  monto: number = 0; // Para enlazar con el campo input
  cuotas: number = 0; 

  constructor(private prestamoService: PrestamoService) {}

  onSubmit(): void {
    const prestamoRequest: PrestamoRequestDTO = {
      monto: this.monto,
      cuotas: this.cuotas
    };

    const solicitanteId = 1; // El ID del solicitante, ajusta según sea necesario
    this.prestamoService.createPrestamo(solicitanteId, prestamoRequest).subscribe({
      next: (response: PrestamoResponseDTO) => {
        this.monto = response.monto;
        this.cuotas = response.cuotas; 
      },
      error: (err) => {
        console.error('Error al crear el préstamo:', err);
      },
    });
  }
  validateNumber(event: KeyboardEvent): void {
    const charCode = event.key.charCodeAt(0);
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }
  //////////////////////////////

  // Método para validar que solo se ingresen números
  validateInput(event: KeyboardEvent) {
    const keyCode = event.keyCode ? event.keyCode : event.which;

    // Solo permitir números (0-9)
    if (keyCode < 48 || keyCode > 57) {
      event.preventDefault();
    }
  }

  // Método para validar que el número ingresado sea positivo
  validatePositive(event: any) {
    const input = event.target.value;

    // Si el número es negativo, se borra el valor y se muestra alerta
    if (parseFloat(input) < 0) {
      event.target.value = '';
      alert('Por favor, ingrese un número positivo.');
    }
  }
}
