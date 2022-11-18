import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AccesoPrincipalComponent } from './componentes/acceso-principal/acceso-principal.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { AgregaGuardiaComponent } from './componentes/agrega-guardia/agrega-guardia.component';
import { SeleccionaGuardiaComponent } from './componentes/selecciona-guardia/selecciona-guardia.component';

@NgModule({
  declarations: [
    AppComponent,
    AccesoPrincipalComponent,
    BotonComponent,
    AgregaGuardiaComponent,
    SeleccionaGuardiaComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
