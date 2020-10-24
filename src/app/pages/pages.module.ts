import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { AppRoutingModule } from '../app-routing.module';  // Opción II
import { RouterModule } from '@angular/router';            // Opción I
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';





@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  imports: [
    CommonModule,
    // AppRoutingModule, //Opcion II - De esta manera importamos todo el modulo de rutas
    RouterModule,        //Opción I -  Con esta opcion solo importamos en router-outlet,
    SharedModule         // que es lo unico que necesitamos para que funciones las rutas
  ]
})
export class PagesModule { }
