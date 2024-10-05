import { Component } from '@angular/core';

@Component({
  selector: 'app-validar-informacion',
  standalone: true,
  imports: [],
  templateUrl: './validar-informacion.component.html',
  styleUrl: './validar-informacion.component.scss'
})
export class ValidarInformacionComponent {

  validateNumber(event: KeyboardEvent): void {
    const charCode = event.key.charCodeAt(0);
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }
}
