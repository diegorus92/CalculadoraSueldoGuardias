import { Component, OnInit } from '@angular/core';
import { faTrash, faEdit, faE } from '@fortawesome/free-solid-svg-icons';
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

  constructor() { }

  ngOnInit(): void {
  }

}
