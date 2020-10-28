import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { BarraProgresoComponent } from './barra-progreso/barra-progreso.component';
import { GraficaDonaComponent } from './grafica-dona/grafica-dona.component';



@NgModule({
  declarations: [
    IncrementadorComponent,
    BarraProgresoComponent,
    GraficaDonaComponent
  ],
  exports: [
    IncrementadorComponent,
    BarraProgresoComponent,
    GraficaDonaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ]
})
export class ComponentsModule { }
