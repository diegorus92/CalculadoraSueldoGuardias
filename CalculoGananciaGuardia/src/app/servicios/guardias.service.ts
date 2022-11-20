import { Injectable } from '@angular/core';
import { IGuardia } from '../Interfaces/IGuardia';
import { GUARDIAS } from '../Mocks/MockGuardias';

import { HttpClient, HttpHeaders, HttpParamsOptions } from "@angular/common/http";
import { Observable, BehaviorSubject, map } from 'rxjs';

const HttpOptions = {
  headers : new HttpHeaders({
    contentType: "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class GuardiasService {

  //private listaGuardias:IGuardia[] = GUARDIAS;
  guardias:IGuardia[] = [];
  private listaGuardias = new BehaviorSubject<IGuardia[]>([])

  apiUrl = "http://localhost:3000/guardias";

  constructor(private http:HttpClient) { }

  get ListaGuardias$(): Observable<IGuardia[]>{
    return this.listaGuardias.asObservable();
  }

  getListaGuardias():Observable<IGuardia[]>{
    return this.http.get<IGuardia[]>(this.apiUrl);
  }
  
  private generarIdGuardia():number{
    return this.guardias.length  > 0 ? Math.max(...this.guardias.map(guardias => guardias.id!)) + 1 : 1;
  }

  agregarGuardia(nuevoGuardia:IGuardia):Observable<IGuardia>{
    nuevoGuardia.id = this.generarIdGuardia();
    this.guardias.push(nuevoGuardia);
    this.listaGuardias.next(this.guardias);
    return this.http.post<IGuardia>(this.apiUrl, nuevoGuardia, HttpOptions);
  }

  buscarGuardia(id:Number):IGuardia{
    return this.guardias.find(guardia=> id==guardia.id) as IGuardia;
  }
  /*get ListaGuardias(){
    return this.listaGuardias;
  }

  private generarIdGuardia():number{
    return this.listaGuardias.length  > 0 ? Math.max(...this.listaGuardias.map(guardias => guardias.id!)) + 1 : 1;
  }

  setListaGuardias(nuevoGuardia:IGuardia){
    nuevoGuardia.id = this.generarIdGuardia();
    this.listaGuardias.push(nuevoGuardia);
  }*/
}
