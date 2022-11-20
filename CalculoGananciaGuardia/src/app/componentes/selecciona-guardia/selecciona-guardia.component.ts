import { Component, OnInit } from '@angular/core';
import { IGuardia } from 'src/app/Interfaces/IGuardia';
import { GuardiasService } from 'src/app/servicios/guardias.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selecciona-guardia',
  templateUrl: './selecciona-guardia.component.html',
  styleUrls: ['./selecciona-guardia.component.css']
})
export class SeleccionaGuardiaComponent implements OnInit {

  guardias:IGuardia[] = [];
  formSelectGuardia: FormGroup;
  tablasUrl = "tablas";

  constructor(private servicioGuardias:GuardiasService, private formBuilder:FormBuilder, private router:Router) {
    this.formSelectGuardia = this.formBuilder.group({
      seleccion:[,[Validators.required]]
    })

    
  }

  ngOnInit(): void {
    this.servicioGuardias.getListaGuardias().
      subscribe((guardias) =>{
        this.guardias = guardias;
        this.servicioGuardias.guardias = this.guardias;
      });
  }


  get Selector(){
    return this.formSelectGuardia.get('seleccion');
  }

  onEnviar(e:Event):void{
    e.preventDefault();

    if(this.formSelectGuardia.valid){
      console.log("Guardia seleccionado: ", this.formSelectGuardia.value);
      let id:Number = this.formSelectGuardia.value.seleccion;
      this.router.navigateByUrl(`tablas/${id}`);
    }
    else{
      alert("No ha seleccionado ningun guardia");
    }
  }
}
