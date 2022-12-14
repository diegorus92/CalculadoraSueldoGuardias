import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccesoTablasComponent } from './componentes/acceso-tablas/acceso-tablas.component';
import { YearComponent } from './componentes/year/year.component';
import { TablaCobroComponent } from './componentes/tabla-cobro/tabla-cobro.component';
import { NavComponent } from './componentes/nav/nav.component';
import { GuardiaComponent } from '../componentes/guardia/guardia.component';
import { AppModule } from '../app.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModuleTsModule } from '../app-routing.module.ts/app-routing.module.ts.module';
import { ObjetivoComponent } from './componentes/objetivo/objetivo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilaComponent } from './componentes/fila/fila.component';
import { InfoObjetivoComponent } from './componentes/info-objetivo/info-objetivo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgregarFilaComponent } from './componentes/agregar-fila/agregar-fila.component';



@NgModule({
    declarations: [
        AccesoTablasComponent,
        YearComponent,
        TablaCobroComponent,
        NavComponent,
        ObjetivoComponent,
        FilaComponent,
        InfoObjetivoComponent,
        AgregarFilaComponent
    ],
    imports: [
        CommonModule,
        AppModule,
        HttpClientModule,
        AppRoutingModuleTsModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class TablasModule { }
