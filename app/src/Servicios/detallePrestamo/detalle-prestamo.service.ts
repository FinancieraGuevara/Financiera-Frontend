import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { DetallePrestamo } from '../../Clases/detallePrestamo/detalle-prestamo';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DetallePrestamoService {

  private apiUrl = 'http://localhost:8080/api/v1/detalleprestamos';

  constructor(private http: HttpClient) {}

  getAllDetallePrestamos(): Observable<DetallePrestamo[]> {
    console.log('Realizando solicitud GET a:', this.apiUrl);
     return this.http.get<DetallePrestamo[]>(this.apiUrl,{withCredentials: true}).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Error al obtener la lista de detalles de préstamos';
        if (error.error instanceof ErrorEvent) {
          // Error del lado del cliente
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // Error del lado del servidor
          errorMessage = `Error: ${error.error.message || 'Ocurrió un error en el servidor'}`;
        }
        console.error('Error en DetallePrestamoService:', errorMessage);
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  getDetallePrestamo(solicitanteId: number): Observable<DetallePrestamo> {
    return this.http.get<DetallePrestamo>(`${this.apiUrl}/${solicitanteId}`,{withCredentials: true}).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Ocurrió un error al obtener el detalle del prestamo';
          if (error.error instanceof ErrorEvent) {
            // Error del lado del cliente
            errorMessage = `Error: ${error.error.message}`;
          } else {
            // Error del lado del servidor
            errorMessage = `Error: ${error.error.message || 'Ocurrió un error en el servidor'}`;
          }
          console.error(errorMessage);
        return throwError(() => new Error(errorMessage));
        })
      );
  }

}
