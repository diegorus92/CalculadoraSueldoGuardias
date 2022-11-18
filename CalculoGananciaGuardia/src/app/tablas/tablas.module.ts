import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccesoTablasComponent } from './componentes/acceso-tablas/acceso-tablas.component';
import { YearComponent } from './componentes/year/year.component';
import { TablaCobroComponent } from './componentes/tabla-cobro/tabla-cobro.component';
import { NavComponent } from './componentes/nav/nav.component';



@NgModule({
  declarations: [
    AccesoTablasComponent,
    YearComponent,
    TablaCobroComponent,
    NavComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TablasModule { }
