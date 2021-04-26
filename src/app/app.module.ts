import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropietarioComponent } from './components/propietario/propietario.component';
import { ConductoreComponent } from './components/conductore/conductore.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { HomeComponent } from './components/home/home.component';
import { ConductoreNewComponent } from './components/conductore-new/conductore-new.component';

@NgModule({
  declarations: [
    AppComponent,
    PropietarioComponent,
    ConductoreComponent,
    VehiculoComponent,
    HomeComponent,
    ConductoreNewComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
