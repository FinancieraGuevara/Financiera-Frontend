import { Routes } from '@angular/router';
import {IniciosesionComponent} from "./iniciosesion/iniciosesion.component";

export const routes: Routes = [


  { path: '', redirectTo: 'inicio', pathMatch: 'full' }, //inicio apunta a cuerpo component
  { path: 'iniciosesion', component: IniciosesionComponent},
];
