import { Injectable } from '@angular/core';
import { IGuardia } from '../Interfaces/IGuardia';
import { GUARDIAS } from '../Mocks/MockGuardias';

@Injectable({
  providedIn: 'root'
})
export class GuardiasService {

  private listaGuardias:IGuardia[] = GUARDIAS;

  constructor() { }

  get ListaGuardias(){
    return this.listaGuardias;
  }

  private generarIdGuardia():number{
    return this.listaGuardias.length  > 0 ? Math.max(...this.listaGuardias.map(guardias => guardias.id!)) + 1 : 1;
  }

  setListaGuardias(nuevoGuardia:IGuardia){
    nuevoGuardia.id = this.generarIdGuardia();
    this.listaGuardias.push(nuevoGuardia);
  }
}
