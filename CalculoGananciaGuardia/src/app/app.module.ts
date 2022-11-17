import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AccesoPrincipalComponent } from './componentes/acceso-principal/acceso-principal.component';
import { BotonComponent } from './componentes/boton/boton.component';

@NgModule({
  declarations: [
    AppComponent,
    AccesoPrincipalComponent,
    BotonComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
