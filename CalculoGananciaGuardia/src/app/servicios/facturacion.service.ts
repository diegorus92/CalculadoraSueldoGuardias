import { Injectable } from '@angular/core';
import { IYear } from '../Interfaces/IYear';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IMes } from '../Interfaces/IMes';
import { IFila } from '../Interfaces/Ifila';
import { IObjetivo } from '../Interfaces/IObjetivo';

const HttpOptions = {
  headers : new HttpHeaders({
    contentType: "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class FacturacionService {

  years:IYear[] = [];
  meses:IMes[] = [];
  dias:IFila[] = [];
  objetivos: IObjetivo[] = []; //Corresponde a los objetivos asentados de cada guardia en cada dia o fila
  registroObjetivos:IObjetivo[] = []; //Corresponde a una lista a parte de Objetivos cuya informacion se copiará  al dar de alta los objetivos de guardias en cada fila

  private listYears = new BehaviorSubject<IYear[]>([]);
  private listMeses = new BehaviorSubject<IMes[]>([]);
  private listDias = new BehaviorSubject<IFila[]>([]);
  private listObjetivos = new BehaviorSubject<IObjetivo[]>([]);
  private listRegistroObjetivos = new BehaviorSubject<IObjetivo[]>([]);
  
  YearApiUrl = "http://localhost:3000/years";
  mesesApiUrl = "http://localhost:3000/meses";
  diasApiUrl = "http://localhost:3000/filas";
  objetivosApiUrl = "http://localhost:3000/objetivos";
  registroObjetivosApiUrl = "http://localhost:3000/registro_objetivos";

  constructor(private http:HttpClient) { }

  ////////////////////Años///////////////////////////////
  get ListYears$():Observable<IYear[]>{
    return this.listYears.asObservable();
  }

  settearListYears$(years:IYear[]){
    this.listYears.next(years);
  }

  getListaYears(): Observable<IYear[]>{
    return this.http.get<IYear[]>(this.YearApiUrl);
  }
  /////////////////////////////////////////////////


  ///////////////////Meses///////////////////////
  get ListMeses$():Observable<IMes[]>{
    return this.listMeses.asObservable();
  }

  getListaMeses():Observable<IMes[]>{
    return this.http.get<IMes[]>(this.mesesApiUrl);
  }

  settearListMeses$(meses:IMes[]):void{
    this.listMeses.next(meses);
  }
  ///////////////////////////////////////////////


  /////////////Filas-Dias//////////////////////
  get ListDias$():Observable<IFila[]>{
    return this.listDias.asObservable();
  }

  getListaDias():Observable<IFila[]>{
    return this.http.get<IFila[]>(this.diasApiUrl);
  }

  settearListaDia$(listaDias:IFila[]){
    this.listDias.next(listaDias);
  }

  private generarIdFila():number{
    let numero = 0;
    return numero;
  }

  completadoCreacionNuevaFila(nuevaFilaIncompleta:IFila):void{

  }
  /////////////////////////////////////////////


  ////////////////Objetivos//////////////////
  get ListObjetivos$():Observable<IObjetivo[]>{
    return this.listObjetivos.asObservable();
  }

  getListaObjetivos():Observable<IObjetivo[]>{
    return this.http.get<IObjetivo[]>(this.objetivosApiUrl);
  }

  settearListObjetivos$(listaObjetivos:IObjetivo[]){
    this.listObjetivos.next(listaObjetivos);
  }
  //////////////////////////////////////////

  ///////////////Registro de Objetivos///////////////////
  get ListRegistroObjetivos$():Observable<IObjetivo[]>{
    return this.listRegistroObjetivos.asObservable();
  }

  getListaRegistroObjetivos():Observable<IObjetivo[]>{
    return this.http.get<IObjetivo[]>(this.registroObjetivosApiUrl);
  }

  settearListRegistroObjetivos(regObjetivos:IObjetivo[]):void{
    this.listRegistroObjetivos.next(regObjetivos);
  }

  //////////////////////////////////////////////////////

  
}
