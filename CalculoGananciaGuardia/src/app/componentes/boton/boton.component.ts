import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  @Input()nombreBoton!: String;
  @Output()estadoBoton = new EventEmitter<boolean>();
  activado: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toogleButton():void{
    console.log("Presionado: "+this.nombreBoton);
    this.activado = !this.activado;
    console.log("Activado?: ", this.activado);

    this.estadoBoton.emit(this.activado);
  }

}
