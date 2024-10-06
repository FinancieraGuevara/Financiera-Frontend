import { Routes } from '@angular/router';
import {IniciosesionComponent} from "./iniciosesion/iniciosesion.component";
import {ValidarInformacionComponent} from "./validar-informacion/validar-informacion.component";
import {UsuariosComponent} from "../app/usuarios/usuarios.component";
import { IngresarDetallePrestamoComponent } from './ingresar-detalle-prestamo/ingresar-detalle-prestamo.component';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { PublicusersComponent } from './usuarios/publicusers/publicusers.component';
export const routes: Routes = [


 //inicio apunta a cuerpo component
  { path: 'private/consulta', component: ValidarInformacionComponent},
  { path: 'private/users', component: UsuariosComponent },
  { path: 'public/users', component: PublicusersComponent },
  { path: 'private/detallePrestamo', component: IngresarDetallePrestamoComponent},
  { path: 'login', component: IniciosesionComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
