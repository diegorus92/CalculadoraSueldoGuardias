import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceso-principal',
  templateUrl: './acceso-principal.component.html',
  styleUrls: ['./acceso-principal.component.css']
})
export class AccesoPrincipalComponent implements OnInit {

  titulo: String = "Calculadora para Guardias";
  subtitulo: String = "Registro de guardias hechas y calculo de cobros mensuales";

  constructor() { }

  ngOnInit(): void {
  }

}
