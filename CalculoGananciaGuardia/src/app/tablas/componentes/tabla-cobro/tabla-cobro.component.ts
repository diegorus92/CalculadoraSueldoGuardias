import { Component, Input, OnInit} from '@angular/core';
import { faTrash, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';
import { IFila } from 'src/app/Interfaces/Ifila';
import { IMes } from 'src/app/Interfaces/IMes';
import { IObjetivo } from 'src/app/Interfaces/IObjetivo';
import { FacturacionService } from 'src/app/servicios/facturacion.service';

@Component({
  selector: 'app-tabla-cobro',
  templateUrl: './tabla-cobro.component.html',
  styleUrls: ['./tabla-cobro.component.css']
})
export class TablaCobroComponent implements OnInit {

  iconoEliminar = faTrash;
  iconoEditar = faEdit;
  iconoAgregar = faPlus;


  objetivos:IObjetivo[] = [];

  @Input()mes:IMes = {
    id: 0,
    nombre: "Enero",
    idYear: 0,
    idGuardia: 0
  }

  dias: IFila[] = [];

  subtotalesFilas:number[] = [];
  formularioAltaActivado:boolean = false;


  constructor(private servicioFacturacion: FacturacionService) 
    { 
      
    }

  ngOnInit(): void {

    //Busco solo los días correspondientes a esta tabla mes
    this.recuperarDiasDeEsteMes();
    console.log("[TablaCobroComponent] días recuperados de este mes  ", this.mes.nombre, ": ", this.dias);

    //Busco todos los objetivos segun el ID del guardia
    this.recuperarObjetivosDelGuardia();
    console.log("[TablaCobroComponent] objetivos recuperados del guardia ID =  ", this.mes.idGuardia, ": ", this.objetivos);

  }


  private recuperarDiasDeEsteMes():void{
    this.servicioFacturacion.getListaDias().subscribe((dias) =>{
      for(let dia of dias){
        if(dia.idMes == this.mes.id){
          this.dias.push(dia);
        }
      }

    });
  }

  private recuperarObjetivosDelGuardia():void{
    this.servicioFacturacion.getListaObjetivos().subscribe((objetivos) =>{
      for(let objetivo of objetivos){
        if(objetivo.idGuardia == this.mes.idGuardia){
          this.objetivos.push(objetivo);
        }
      }
    });
  }

  

  recibirSubtotales(subtotalFila:number):void{
    this.subtotalesFilas.push(subtotalFila);
    console.log("[TablaCobroComponent] Mes ID: ",this.mes.id," ",this.mes.nombre,":: subtotales recibidos de FilaComponent: ",this.subtotalesFilas);
  }
  
  calcularSubtotales():number{
    let acumulador:number = 0;
    if(this.subtotalesFilas.length > 0){
      for(let subtotal of this.subtotalesFilas){
        acumulador += subtotal;
      }
    }
    else{ 
      console.log("[TablaCobroComponent] No hay subtotales cargados en lista")
    }

    return acumulador;
  }

  alternarFormularioAlta():void{
    this.formularioAltaActivado = !this.formularioAltaActivado;
  }

  //Actualiza lista correspondientes a este componente y emite señal al padre (YearComponent) para que actualice también
  actualizarFilas(datos:any[]){
    if(datos.length == 2){
      this.formularioAltaActivado = false;
      /*this.recuperarDiasDeEsteMes();
      this.recuperarObjetivosDelGuardia();*/
      this.dias.push(datos[0]);
      this.objetivos.push(datos[1]);
    }
  }
}
