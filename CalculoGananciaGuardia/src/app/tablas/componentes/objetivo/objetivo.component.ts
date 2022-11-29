import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IObjetivo } from 'src/app/Interfaces/IObjetivo';

@Component({
  selector: 'app-objetivo',
  templateUrl: './objetivo.component.html',
  styleUrls: ['./objetivo.component.css']
})
export class ObjetivoComponent implements OnInit {

  @Input()objetivo:IObjetivo = {
    id:0,
    nombre:"Edificio tal",
    direccion:"calle tal altura 666",
    telefono: "123456789",
    pagoPorHora: 120.75
  }

  alternarInfo:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  verInfoObjetivo():void{
    this.alternarInfo = !this.alternarInfo;
    console.log("[ObjetivoComponent]Mostrar Info Objetivo ", this.objetivo.id," ", this.objetivo.nombre, " = ", this.alternarInfo);
  }

  //Pone en false la variable para que se cierre automáticamente la visualizacion del boton modal en la vista
  apagarAlternanciaInfoObjetivo(boleano:boolean):void{
    this.alternarInfo = boleano;
  }
}
