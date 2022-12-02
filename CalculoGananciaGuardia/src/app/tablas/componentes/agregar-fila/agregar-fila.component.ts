import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IFila } from 'src/app/Interfaces/Ifila';
import { IMes } from 'src/app/Interfaces/IMes';
import { IObjetivo } from 'src/app/Interfaces/IObjetivo';
import { FacturacionService } from 'src/app/servicios/facturacion.service';

@Component({
  selector: 'app-agregar-fila',
  templateUrl: './agregar-fila.component.html',
  styleUrls: ['./agregar-fila.component.css']
})
export class AgregarFilaComponent implements OnInit {

  formAltaFila!:FormGroup;
  registroObjetivos:IObjetivo[] = [];
  nuevoObj:IObjetivo = {
    nombre: "",
    pagoPorHora: 0
  };

  @Input()mes:IMes ={ //Será usado para asociar la nueva fila y objetivo a su correspondiente lugar en tabla y guardia 
    id: 0,
    nombre: "Eneroxxxx",
    idYear: 0,
    idGuardia: 0
  }

  @Output()agregadoEventEmitter = new EventEmitter<any[]>();

  constructor(
    private formBuilder: FormBuilder,
    private servicioFacturacion: FacturacionService
  ) 
  { 
    this.formAltaFila = this.formBuilder.group({
      dia:["",[Validators.required]],
      fecha:["",[Validators.required]],
      cantidadHorasGuardia:[,[Validators.required]],
      objetivo:[,[Validators.required]]
    });

    this.servicioFacturacion.getListaRegistroObjetivos().subscribe((regObjetivos) => {
      this.servicioFacturacion.registroObjetivos = regObjetivos;
    });
  }

  ngOnInit(): void {
    this.recuperarRegistroObjetivos();
    console.log("[AgregarFilaComponent] Registro de objetivos recuperados =  ", this.registroObjetivos);
  }

  get Dia(){
    return this.formAltaFila.get("dia");
  }

  get CantHoras(){
    return this.formAltaFila.get("cantidadHorasGuardia");
  }

  get Objetivo(){
    return this.formAltaFila.get("objetivo");
  }

  get Fecha(){
    return this.formAltaFila.get("fecha");
  }


  onSubmit(event: Event):void{
    event.preventDefault();
    if(this.formAltaFila.valid){
      //aqui se creará la el IFila y el IObjetivo para pasarselo al servicio y que lo agregue a la bd
      console.log("[AgregarFilaComponent] Formulario OK", this.formAltaFila.value);
      console.log("[AgregarFilaComponent] ID's de año, mes y guardia asociados: ", this.mes);
      
      //Creacion y guardado de fila y objetivo
      let nuevaFila:IFila = this.servicioFacturacion.completadoCreacionNuevaFila(this.prepararDatosNuevaFila(this.formAltaFila.value as IFila, this.mes));
      let nuevoObjetivo:IObjetivo = this.servicioFacturacion.completadoCreacionNuevoObjetivos(this.prepararDatosNuevoObjetivo(Number.parseInt(this.formAltaFila.value.objetivo), this.mes), nuevaFila);
      this.servicioFacturacion.guardarNuevaFilaYObjetivo(nuevaFila, nuevoObjetivo);//guardado
      this.servicioFacturacion.postearFila(nuevaFila).subscribe();
      this.servicioFacturacion.postearObjetivo(nuevoObjetivo).subscribe(() => {
        //Emito el evento para que el componente padre (TablaCobroComponent) actualice la vista con la nueva fila
        this.agregadoEventEmitter.emit([nuevaFila, nuevoObjetivo]);
      });
    }
    else{
      alert("[AgragarFilaComponent] error en formulario de alta de fila");
      this.formAltaFila.markAllAsTouched();
    }
  }

  //Recupera registroObjetivos de la BD y los guarda en una lista en memoria para tenerlos listos
  private recuperarRegistroObjetivos():void{
    this.servicioFacturacion.getListaRegistroObjetivos().subscribe((objetivos) =>{
      for(let objetivo of objetivos){
        this.registroObjetivos.push(objetivo);
      }
    })
  }

  private prepararDatosNuevaFila(datosNuevaFila:IFila, datosFecha:IMes):IFila{
    let nuevaFila: IFila = {
      //El id de esta nueva fila se generará en el servicio antes de guardarlo en bd
      dia: datosNuevaFila.dia,
      fecha: datosNuevaFila.fecha,
      cantidadHorasGuardia: datosNuevaFila.cantidadHorasGuardia,
      idMes: datosFecha.id!,
      idYear: datosFecha.idYear,
      idGuardia: datosFecha.idGuardia
    }

    return nuevaFila;
  }


  private prepararDatosNuevoObjetivo(idObjetivoSeleccionado:number, datosFecha:IMes):IObjetivo{
    let nuevoObj:IObjetivo = {
      nombre:"", 
      pagoPorHora: 0
    };
    let registroObjetivos = this.servicioFacturacion.registroObjetivos;
    for(let obj of registroObjetivos){
      if(obj.id == idObjetivoSeleccionado){
        //id en el servicio
        nuevoObj.nombre = obj.nombre;
        nuevoObj.direccion = obj.direccion;
        nuevoObj.telefono = obj.telefono;
        nuevoObj.pagoPorHora = obj.pagoPorHora;
        //idFIla en el servicio
        nuevoObj.idGuardia = datosFecha.idGuardia;
        return nuevoObj;
      }
    } 
    return nuevoObj;
  }

}
