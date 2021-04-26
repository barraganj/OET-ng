import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';



import { ConductoreComponent } from './components/conductore/conductore.component';
import { PropietarioComponent } from './components/propietario/propietario.component';
import { VehiculoComponent} from './components/vehiculo/vehiculo.component';
import { HomeComponent } from './components/home/home.component';
import { ConductoreNewComponent } from './components/conductore-new/conductore-new.component';

const appRoutes: Routes = [

    {path:'', component: HomeComponent},
    {path:'inicio',component: HomeComponent},
    {path:'conductores',component: ConductoreComponent},
    {path:'propietarios',component: PropietarioComponent},
    {path:'vehiculos',component: VehiculoComponent},
    {path:'new-conductor',component: ConductoreNewComponent},

    {path:'**',component: HomeComponent}

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);