import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IGuardia } from 'src/app/Interfaces/IGuardia';
import { GuardiasService } from 'src/app/servicios/guardias.service';

@Component({
  selector: 'app-agrega-guardia',
  templateUrl: './agrega-guardia.component.html',
  styleUrls: ['./agrega-guardia.component.css']
})
export class AgregaGuardiaComponent implements OnInit {

  guardiaForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private servicioGuardias: GuardiasService) {

    this.guardiaForm = this.formBuilder.group({
      nombre:[, [Validators.required]],
      apellido:[, [Validators.required]]
    });

  }

  ngOnInit(): void {
  }

  get Nombre(){
    return this.guardiaForm.get("nombre");
  }

  get Apellido(){
    return this.guardiaForm.get("apellido");
  }

  onEnviar(e:Event):void{
    e.preventDefault();

    if(this.guardiaForm.valid){
      console.log(this.guardiaForm.value);
      //this.servicioGuardias.setListaGuardias(this.guardiaForm.value as IGuardia);
      this.servicioGuardias.agregarGuardia(this.guardiaForm.value as IGuardia).subscribe();
      this.guardiaForm.reset();
    }
    else{
      console.log("Formulario invalido");
      this.guardiaForm.markAllAsTouched();
    }
  }
}
