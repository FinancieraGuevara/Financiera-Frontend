import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:8080/api/v1';

  login(username: string, password: string): Observable<any> {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password);  // Usando URL encoded como en Postman
    return this.http.post('http://localhost:8080/api/v1/login', body.toString(), {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }),
      withCredentials: true  // Para enviar cookies de sesión
    });
  }

  // GET para obtener los usuarios privados
  getPrivateUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/private/users`, {
      withCredentials: true  // Envía la cookie de sesión con la solicitud
    });
  }

    // GET para obtener los usuarios publicos

    getPublicUsers(): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/public/users`, {
        withCredentials: true  // Envía la cookie de sesión con la solicitud
      });
    }
    
 // Método para cerrar sesión
 logout(): Observable<any> {
  return this.http.post('http://localhost:8080/api/v1/logout', {}, { withCredentials: true });
}

}