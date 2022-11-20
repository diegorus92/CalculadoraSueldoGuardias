import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccesoPrincipalComponent } from '../componentes/acceso-principal/acceso-principal.component';
import { AccesoTablasComponent } from '../tablas/componentes/acceso-tablas/acceso-tablas.component';


const ROUTES: Routes = [
  {path: 'acceso-principal', component: AccesoPrincipalComponent},
  {path: '', redirectTo:'acceso-principal', pathMatch: 'full'},
  {path: 'tablas/:guardiaId', component: AccesoTablasComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModuleTsModule { }
