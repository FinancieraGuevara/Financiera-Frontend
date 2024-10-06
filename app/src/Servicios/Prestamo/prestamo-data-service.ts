import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrestamoDataService {
  private reservaId: number;

  setReservaId(id: number) {
    this.reservaId = id;
  }

  getReservaId(): number {
    return this.reservaId;
  }
}
