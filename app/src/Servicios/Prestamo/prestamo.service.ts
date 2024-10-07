import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PrestamoResponseDTO { 
  monto: number;
  cuotas: number; 
}

export interface PrestamoRequestDTO { 
  monto: number;
  cuotas: number
}

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  private apiUrl = 'https://financiera-back-2a2b.onrender.com/api/v1';

  constructor(private http: HttpClient) {}

  createPrestamo(solicitanteId: number, prestamoRequestDTO: PrestamoRequestDTO): Observable<PrestamoResponseDTO> {
    return this.http.post<PrestamoResponseDTO>(`${this.apiUrl}/prestamos/crear/${solicitanteId}`, prestamoRequestDTO);
  }
}
