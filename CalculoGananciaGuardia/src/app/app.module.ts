import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModuleTsModule } from './app-routing.module.ts/app-routing.module.ts.module';

import { AccesoPrincipalComponent } from './componentes/acceso-principal/acceso-principal.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { AgregaGuardiaComponent } from './componentes/agrega-guardia/agrega-guardia.component';
import { SeleccionaGuardiaComponent } from './componentes/selecciona-guardia/selecciona-guardia.component';
import { GuardiaComponent } from './componentes/guardia/guardia.component';
import { TablasModule } from './tablas/tablas.module';

@NgModule({
  declarations: [
    AppComponent,
    AccesoPrincipalComponent,
    BotonComponent,
    AgregaGuardiaComponent,
    SeleccionaGuardiaComponent,
    GuardiaComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModuleTsModule,
  ],
  exports: [
    GuardiaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
