import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Solicitante } from '../../Clases/Solicitante/solicitante';
import { responseSolicitante } from '../../app/validar-informacion/responseSolicitante';

@Injectable({
  providedIn: 'root'
})
export class SolicitanteService {
  private solicitanteData: Solicitante; 
  constructor(private http: HttpClient) {}
  private apiUrl = 'https://financiera-back-2a2b.onrender.com/api/v1';

  // Método para guardar datos del solicitante
  setSolicitanteData(data: Solicitante): void {
    this.solicitanteData = data;
  }

  // Método para obtener datos del solicitante
  getSolicitanteData(): Solicitante {
    return this.solicitanteData;
  }

  getDataById(identifier: string, type: string): Observable<responseSolicitante<Solicitante>> {
    const url = `${this.apiUrl}/private/consulta/${identifier}?type=${type}`;
    return this.http.get<responseSolicitante<Solicitante>>(url, {
        withCredentials: true
    });
  }
  getSolicitanteIdByDni(id: string): Observable<Solicitante> {
    return this.http.get<Solicitante>(`${this.apiUrl}/solicitantes/searchByDni/${id}`);
}


}
