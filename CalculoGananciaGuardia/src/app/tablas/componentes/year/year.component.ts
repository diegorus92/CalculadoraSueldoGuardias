import { Component, Input, OnInit } from '@angular/core';
import { IMes } from 'src/app/Interfaces/IMes';
import { IYear } from 'src/app/Interfaces/IYear';
import { FacturacionService } from 'src/app/servicios/facturacion.service';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {

  @Input()year: IYear = {
    id: 0,
    year: 2020,
    idGuardia: 0
  }
 
  @Input()meses: IMes[] = [];
  copiaMeses:IMes[] = [];

  mesesDeEsteAnio: IMes[] = [];

  constructor() {
    
   }

  ngOnInit(): void {
    console.log("[YearComponent]Meses: ", this.meses);
    
    this.recuperarMesesDeEsteAnio();
    console.log("[YearComponent] Meses recuperados de este año:", this.year.id, " :: ", this.mesesDeEsteAnio);
    
  }

  

  private recuperarMesesDeEsteAnio():void{
    for(let mes of this.meses){
      if(mes.idYear == this.year.id){
        this.mesesDeEsteAnio.push(mes);
      }
    }
  }


}
