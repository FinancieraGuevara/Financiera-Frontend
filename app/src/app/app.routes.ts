import { Routes } from '@angular/router';
import {IniciosesionComponent} from "./iniciosesion/iniciosesion.component";
import {ValidarInformacionComponent} from "./validar-informacion/validar-informacion.component";
import {UsuariosComponent} from "../app/usuarios/usuarios.component"
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { PublicusersComponent } from './usuarios/publicusers/publicusers.component';
import { HistorialPagosComponent } from './historial-pagos/historial-pagos.component';
export const routes: Routes = [

 //inicio apunta a cuerpo component
  { path: 'private/consulta', component: ValidarInformacionComponent},
  { path: 'private/users', component: UsuariosComponent },
  { path: 'public/users', component: PublicusersComponent },
  { path: 'login', component: IniciosesionComponent },
  { path: 'historialpagos', component: HistorialPagosComponent},
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
