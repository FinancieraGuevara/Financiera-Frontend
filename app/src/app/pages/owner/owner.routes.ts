import { Routes } from '@angular/router';
import { OwnerLayoutComponent } from './owner-layout/owner-layout.component';
import { RegisterSedeComponent } from './register-sede/register-sede.component';
import { HistorialPagosComponent } from '../../shared/components/historial-pagos/historial-pagos.component';

export const ownerRoutes: Routes = [
    {
        path: '',
        component: OwnerLayoutComponent,
        children: [
            { path: 'historial-prestamos', component: HistorialPagosComponent},
            { path: "register-sede", component :RegisterSedeComponent},
            { path: "**", redirectTo: "historial-prestamos"  }
        ]
    }
];