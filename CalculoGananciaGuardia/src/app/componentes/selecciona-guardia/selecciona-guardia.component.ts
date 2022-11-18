import { Component, OnInit } from '@angular/core';
import { IGuardia } from 'src/app/Interfaces/IGuardia';
import { GuardiasService } from 'src/app/servicios/guardias.service';

@Component({
  selector: 'app-selecciona-guardia',
  templateUrl: './selecciona-guardia.component.html',
  styleUrls: ['./selecciona-guardia.component.css']
})
export class SeleccionaGuardiaComponent implements OnInit {

  guardias:IGuardia[] = [];

  constructor(private servicioGuardias:GuardiasService) { }

  ngOnInit(): void {
    this.servicioGuardias.getListaGuardias().
      subscribe((guardias) =>{
        this.guardias = guardias;
        this.servicioGuardias.guardias = this.guardias;
      });
  }

}
