import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { ListadoPaisesComponent } from './components/listado-paises/listado-paises.component'
import { PaisService } from './services/pais.service';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MultiSelectModule} from 'primeng/multiselect';


//Modulos de PrimeNg
import {TableModule} from 'primeng/table';
import { ViajeComponent } from './components/viaje/viaje.component';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPaisesComponent,
    ViajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    TableModule,
    MultiSelectModule,
    ButtonModule
  ],
  providers: [PaisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
