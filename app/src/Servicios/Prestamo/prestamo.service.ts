import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prestamorequest } from '../../Clases/PrestamoRequest/prestamorequest'; 
import { Prestamoresponse } from '../../Clases/PrestamoResponse/prestamoresponse';
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

  private apiUrl = 'http://localhost:8080/api/v1/prestamos';

  constructor(private http: HttpClient) {}

  createPrestamo(solicitanteId: number, prestamoRequestDTO: Prestamorequest): Observable<Prestamoresponse> {
    return this.http.post<Prestamoresponse>(`${this.apiUrl}/crear/${solicitanteId}`, prestamoRequestDTO , {
      withCredentials: true
    });
  }
}
