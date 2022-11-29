import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IObjetivo } from 'src/app/Interfaces/IObjetivo';

@Component({
  selector: 'app-info-objetivo',
  templateUrl: './info-objetivo.component.html',
  styleUrls: ['./info-objetivo.component.css']
})
export class InfoObjetivoComponent implements OnInit {

  @Input()objetivo:IObjetivo = {
    id:0,
    nombre:"Edificio tal",
    direccion:"calle tal altura 666",
    telefono: "123456789",
    pagoPorHora: 120.75
  }

  @Output()alternanciaEmitter = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  //Usado para enviar el dato false a la variable alternacia del padre y que se cierre el boton modal en la vista
  emitirAlternancia(alternancia:boolean):void{
    this.alternanciaEmitter.emit(alternancia);
  }
}
