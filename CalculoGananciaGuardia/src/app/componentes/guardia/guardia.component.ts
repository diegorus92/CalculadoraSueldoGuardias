import { Component, Input, OnInit } from '@angular/core';
import { IGuardia } from 'src/app/Interfaces/IGuardia';

@Component({
  selector: 'app-guardia',
  templateUrl: './guardia.component.html',
  styleUrls: ['./guardia.component.css']
})
export class GuardiaComponent implements OnInit {

  @Input()guardia:IGuardia = {
    id: 0,
    nombre: "",
    apellido: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
