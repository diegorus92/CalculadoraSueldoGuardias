import { Component, Input, OnInit } from '@angular/core';
import { faTrash, faEdit, faE } from '@fortawesome/free-solid-svg-icons';
import { IMes } from 'src/app/Interfaces/IMes';
import { IObjetivo } from 'src/app/Interfaces/IObjetivo';

@Component({
  selector: 'app-tabla-cobro',
  templateUrl: './tabla-cobro.component.html',
  styleUrls: ['./tabla-cobro.component.css']
})
export class TablaCobroComponent implements OnInit {

  iconoEliminar = faTrash;
  iconoEditar = faEdit;

  objetivo:IObjetivo = {
    id:1,
    nombre:"CD Previsora",
    direccion:"Ruta 5",
    telefono:"364786756",
    pagoPorHora: 120.50
  }

  @Input()mes:IMes = {
    id: 0,
    nombre: "Enero",
    idYear: 0,
    idGuardia: 0
  }


  constructor() { }

  ngOnInit(): void {

  }

}
