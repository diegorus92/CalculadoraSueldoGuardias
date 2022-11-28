import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { IFila } from 'src/app/Interfaces/Ifila';
import { IObjetivo } from 'src/app/Interfaces/IObjetivo';
import { FacturacionService } from 'src/app/servicios/facturacion.service';

@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.css']
})
export class FilaComponent implements OnInit {

  iconoEditar = faEdit;
  iconoEliminar = faTrash;

  @Input()dia: IFila = {
    id:0,
    dia:"Domingoño",
    fecha:"33",
    cantidadHorasGuardia:0,
    idMes:0,
    idYear:0,
    idGuardia:0
  };

  objetivo: IObjetivo = {
    id:0,
    nombre:"afafdadfasf",
    direccion:"afasdfafd 666",
    telefono: "4234234234",
    pagoPorHora: 2.50
  }

  @Output()subtotalEmitter = new EventEmitter<number>();

  constructor(private servicioFacturacion: FacturacionService) { }

  ngOnInit(): void {
    console.log("[FilaComponent] buscando objetivo de fila en servicio", this.objetivo);
    this.buscarObjetivo();
    console.log("[FilaComponent] Resultado de busqueda: ", this.objetivo);

    this.emitirSubtotal();
  }

  private buscarObjetivo():void{
    this.servicioFacturacion.getListaObjetivos().subscribe((objetivos) =>{
      for(let objetivo of objetivos){
        console.log("[FilaComponent] bucarObjetivo = ", objetivo);
        if(objetivo.idFila == this.dia.id){
          this.objetivo = objetivo;
        }
      }
    });
  }

  calcularSubtotalFila():number{
    return this.objetivo.pagoPorHora * this.dia.cantidadHorasGuardia;
  }

  emitirSubtotal():void{
    this.servicioFacturacion.getListaObjetivos().subscribe((objetivos)=>{
      for(let objetivo of objetivos){
        console.log("[FilaComponent] bucarObjetivo = ", objetivo);
        if(objetivo.idFila == this.dia.id){
          this.subtotalEmitter.emit(objetivo.pagoPorHora * this.dia.cantidadHorasGuardia);
        }
      }
    })
  }
}
