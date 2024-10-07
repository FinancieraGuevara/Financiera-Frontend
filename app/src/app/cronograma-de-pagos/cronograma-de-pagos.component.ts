
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { DetallePrestamo } from '../../Clases/detallePrestamo/detalle-prestamo'; // Asegúrate de importar la clase DetallePrestamo
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from '@angular/router';
import {UserService} from "../../Servicios/Usuario/user.service";
import {NavegadorComponent} from "../navegador/navegador.component";
import { HttpClient } from '@angular/common/http'; 
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-cronograma-de-pagos',
  standalone: true,
  imports: [CommonModule], // Agrega CommonModule a los imports
  templateUrl: './cronograma-de-pagos.component.html',
  styleUrls: ['./cronograma-de-pagos.component.scss']
})

export class CronogramaDePagosComponent implements OnInit {
  ultimoDetallePrestamo: DetallePrestamo | null = null;
  constructor(private router: Router, private http: HttpClient) {}

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
  downloadPdf() {
    // Recuperar el ID del solicitante desde localStorage
    const solicitanteId = localStorage.getItem('solicitanteIdStr');

    // URL del endpoint de descarga del PDF
    const url = `https://financiera-back-2a2b.onrender.com/api/v1/reports/pdf/${solicitanteId}`;

    // Hacer la solicitud HTTP para descargar el PDF
    this.http.get(url, { responseType: 'blob' })
      .pipe(
        tap((response: Blob) => {
          const blob = new Blob([response], { type: 'application/pdf' });
          const downloadUrl = window.URL.createObjectURL(blob);

          const a = document.createElement('a');
          a.href = downloadUrl;
          a.download = `Cronograma_${solicitanteId}.pdf`; // Nombre del archivo
          a.click();

          window.URL.revokeObjectURL(downloadUrl); // Liberar memoria
        }),
        catchError(error => {
          console.error('Error al descargar el PDF:', error);
          return of(null); // Manejo de error
        })
      )
      .subscribe();
  }
}

