import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Prestamo} from "../../Clases/Prestamo/prestamo";
import {Solicitante} from "../../Clases/Solicitante/solicitante";


@Injectable({
  providedIn: 'root'
})
export class PrestamoService {
  private urlBd = "http://localhost:8080/api/v1/reports/user/11";
  private urlUser = "http://localhost:8080/api/v1/reports/user/11";

  constructor(private httpClient: HttpClient) { }

  // Crear un préstamo
  crearPrestamo(prestamo: Prestamo): Observable<Prestamo> {
    return this.httpClient.post<Prestamo>(`${this.urlBd}/crear`, prestamo).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener préstamo por ID
  obtenerPrestamo(id: number): Observable<Prestamo> {
    return this.httpClient.get<Prestamo>(`${this.urlBd}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Actualizar datos del préstamo
  actualizarPrestamo(prestamo: Prestamo): Observable<Prestamo> {
    return this.httpClient.put<Prestamo>(`${this.urlBd}/actualizar`, prestamo).pipe(
      catchError(this.handleError)
    );
  }

  // Eliminar préstamo
  eliminarPrestamo(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.urlBd}/eliminar/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Crear cuenta de cliente
  createAccount(solicitante: Solicitante): Observable<number> {
    return this.httpClient.post<number>(`${this.urlUser}/register`, solicitante, { responseType: 'text' as 'json' }).pipe(
      catchError(this.handleError)
    );
  }

  // Método para manejar errores
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocurrió un error';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error: ${error.error.message || 'Ocurrió un error en el servidor'}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
