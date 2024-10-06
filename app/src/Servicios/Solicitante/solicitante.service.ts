import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Solicitante } from '../../Clases/Solicitante/solicitante';
import { responseSolicitante } from '../../app/validar-informacion/responseSolicitante';

@Injectable({
  providedIn: 'root'
})
export class SolicitanteService {

  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:8080/api/v1/private';

  getDataById(identifier: string, type: string): Observable<responseSolicitante<Solicitante>> {
    const url = `${this.apiUrl}/consulta/${identifier}?type=${type}`;
    return this.http.get<responseSolicitante<Solicitante>>(url, {
        withCredentials: true // Asegúrate de que esto esté dentro de las opciones
    });
}

}
