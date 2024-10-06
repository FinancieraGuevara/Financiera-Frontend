import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PrestamoResponseDTO {
  // Define aquí las propiedades que tu PrestamoResponseDTO contiene
  monto: number;
  cuotaMensual: number;
  pagoTotal: number;
}

export interface PrestamoRequestDTO {
  // Define las propiedades del objeto de solicitud
  monto: number;
  // Otros campos requeridos...
}

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  private apiUrl = 'http://localhost:8080/api/v1'; // Cambia a tu URL base

  constructor(private http: HttpClient) {}

  createPrestamo(solicitanteId: number, prestamoRequestDTO: PrestamoRequestDTO): Observable<PrestamoResponseDTO> {
    return this.http.post<PrestamoResponseDTO>(`${this.apiUrl}/prestamos/crear/${solicitanteId}`, prestamoRequestDTO);
  }
}
