import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-acceso-principal',
  templateUrl: './acceso-principal.component.html',
  styleUrls: ['./acceso-principal.component.css']
})
export class AccesoPrincipalComponent implements OnInit {

  titulo: String = "Calculadora para Guardias";
  subtitulo: String = "Registro de guardias hechas y calculo de cobros mensuales";
  botonAgregarGuardia: String= "Agregar Guardia";
  botonSeleccionarGuardia: String = "Seleccionar Guardia";
  estadoBotonAgregacion: boolean = false;
  estadoBotonSeleccion: boolean = false;
  iconoCafe = faCoffee;

  constructor() { }

  ngOnInit(): void {
  }

  activarFormularioAgregacion(estado:boolean):void{
    this.estadoBotonAgregacion = estado;
  }

  activarFormularioSeleccion(estado:boolean):void{
    this.estadoBotonSeleccion = estado;
  }
}
