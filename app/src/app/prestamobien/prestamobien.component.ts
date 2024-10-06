import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import {Prestamo} from "../../Clases/Prestamo/prestamo";
import {PrestamoService} from "../../Servicios/Prestamo/prestamo.service";
import {PrestamoDataService} from "../../Servicios/Prestamo/prestamo-data-service";



@Component({
  selector: 'app-prestamobien',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './prestamobien.component.html',
  styleUrl: './prestamobien.component.scss'
})
export class PrestamobienComponent implements OnInit {
  prestamo: Prestamo = new Prestamo();
  prestamoId: number;

  constructor(
    private router: Router,
    private prestamoService: PrestamoService,
    private route: ActivatedRoute,
    private prestamoDataService: PrestamoDataService
  ) {}

  ngOnInit() {
    this.obtenerPrestamo(); // Llama a obtenerPrestamo al inicializar
    this.handlePaymentReturn(); // Llama a handlePaymentReturn al inicializar
  }

  obtenerPrestamo() {
    this.route.paramMap.subscribe(params => {
      this.prestamoId = this.prestamoDataService.getPrestamoId();

      if (this.prestamoId) {
        this.getPrestamoById(this.prestamoId);
      } else {
        console.error('No se encontró el ID del préstamo');
      }
    });
  }

  navigateToHome() {
    this.router.navigate(['/inicio']);
  }

  getPrestamoById(id: number): void {
    this.prestamoService.obtenerPrestamo(id).subscribe(prestamo => {
      this.prestamo = prestamo;  // Asignar el préstamo obtenido
      this.ordenes = prestamo.ordenes;
      console.log('Préstamo obtenido:', this.prestamo);
    }, error => {
      console.error('Error al obtener el préstamo:', error);
    });
  }


  handlePaymentReturn() {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      if (token) {
        this.handlePaymentSuccess(token); // Llama al método para procesar el pago
      }
    });
  }

  handlePaymentSuccess(token: string) {
    this.prestamoService.handlePaymentSuccess(token).subscribe(
      (redirectUrl) => {
        window.location.href = redirectUrl; // Redirige a la URL del frontend
      },
      (error) => {
        console.error('Error al procesar el éxito del pago:', error);
      }
    );
  }
}
