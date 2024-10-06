import { Routes } from '@angular/router';
import {IniciosesionComponent} from "./iniciosesion/iniciosesion.component";
import {ValidarInformacionComponent} from "./validar-informacion/validar-informacion.component";
import {UsuariosComponent} from "../app/usuarios/usuarios.component"
import { AppComponent } from './app.component';
import { from } from 'rxjs';
export const routes: Routes = [


 //inicio apunta a cuerpo component
  { path: 'datos', component: ValidarInformacionComponent},
  { path: 'public/users', component: ValidarInformacionComponent },
  { path: 'home', component: UsuariosComponent },
  { path: 'login', component: IniciosesionComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
