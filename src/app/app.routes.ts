import { Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { AltaViviendaComponent } from './alta-vivienda/alta-vivienda.component';

export const routes: Routes = [
    {
        path: '', component: ListadoComponent, children: [
            { path: 'alta', component: AltaViviendaComponent },
            ]
    }

];
