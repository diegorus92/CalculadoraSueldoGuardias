import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  @Input()mes:IMes ={ //Será usado para asociar la nueva fila y objetivo a su correspondiente lugar en tabla y guardia 
    id: 0,
    nombre: "Eneroxxxx",
    idYear: 0,
    idGuardia: 0
  }

  constructor(
    private formBuilder: FormBuilder,
    private servicioFacturacion: FacturacionService
  ) 
  { 
    this.formAltaFila = this.formBuilder.group({
      dia:["",[Validators.required]],
      fecha:["",[Validators.required]],
      cantHoras:[,[Validators.required]],
      objetivo:[,[Validators.required]]
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
    return this.formAltaFila.get("cantHoras");
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
    }
    else{
      alert("[AgragarFilaComponent] error en formulario de alta de fila");
      this.formAltaFila.markAllAsTouched();
    }
  }


  private recuperarRegistroObjetivos():void{
    this.servicioFacturacion.getListaRegistroObjetivos().subscribe((objetivos) =>{
      for(let objetivo of objetivos){
        this.registroObjetivos.push(objetivo);
      }
    })
  }

}
