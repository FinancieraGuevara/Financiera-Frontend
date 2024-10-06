import { Routes } from '@angular/router';
import {IniciosesionComponent} from "./iniciosesion/iniciosesion.component";
import {ValidarInformacionComponent} from "./validar-informacion/validar-informacion.component";
import {UsuariosComponent} from "../app/usuarios/usuarios.component";
import { IngresarDetallePrestamoComponent } from './ingresar-detalle-prestamo/ingresar-detalle-prestamo.component';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { PublicusersComponent } from './usuarios/publicusers/publicusers.component';
import { IngresarDetallePrestamoComponent } from './ingresar-detalle-prestamo/ingresar-detalle-prestamo.component';
import { IngresarDetallesDePrestamosV2Component } from './ingresar-detalles-de-prestamos-v2/ingresar-detalles-de-prestamos-v2.component';
import { CronogramaDePagosComponent } from './cronograma-de-pagos/cronograma-de-pagos.component';
import { PrestamobienComponent } from './prestamobien/prestamobien.component';

export const routes: Routes = [


 //inicio apunta a cuerpo component
 { path: 'private/consulta/prestamo/cronograma/bien', component: PrestamobienComponent },
 { path: 'private/consulta/prestamo/cronograma', component: CronogramaDePagosComponent },
 { path: 'private/consulta/prestamo', component: IngresarDetallesDePrestamosV2Component },
 { path: 'private/consulta', component: ValidarInformacionComponent},
  { path: 'private/users', component: UsuariosComponent },
  { path: 'public/users', component: PublicusersComponent },
  { path: 'private/detallePrestamo', component: IngresarDetallePrestamoComponent},
  { path: 'login', component: IniciosesionComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

