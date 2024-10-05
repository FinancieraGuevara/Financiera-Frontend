import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {IniciosesionComponent} from "./iniciosesion/iniciosesion.component";
import {PiepaginaComponent} from "./piepagina/piepagina.component";
import {NavegadorComponent} from "./navegador/navegador.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IniciosesionComponent, PiepaginaComponent, NavegadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
}
