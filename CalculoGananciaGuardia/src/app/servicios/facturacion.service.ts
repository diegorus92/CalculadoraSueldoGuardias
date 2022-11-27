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
  objetivos: IObjetivo[] = [];

  private listYears = new BehaviorSubject<IYear[]>([]);
  private listMeses = new BehaviorSubject<IMes[]>([]);
  private listDias = new BehaviorSubject<IFila[]>([]);
  private listObjetivos = new BehaviorSubject<IObjetivo[]>([]);
  YearApiUrl = "http://localhost:3000/years";
  mesesApiUrl = "http://localhost:3000/meses";
  diasApiUrl = "http://localhost:3000/filas";
  objetivosApiUrl = "http://localhost:3000/objetivos";

  constructor(private http:HttpClient) { }

  ////////////////////Años///////////////////////////////
  get ListYears$():Observable<IYear[]>{
    return this.listYears.asObservable();
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

  ///////////////////////////////////////////////


  /////////////Filas-Dias//////////////////////
get ListDias$():Observable<IFila[]>{
  return this.listDias.asObservable();
}

  getListaDias():Observable<IFila[]>{
    return this.http.get<IFila[]>(this.diasApiUrl);
  }
  /////////////////////////////////////////////


  ////////////////Objetivos//////////////////
  get ListObjetivos$():Observable<IObjetivo[]>{
    return this.listObjetivos.asObservable();
  }

  getListaObjetivos():Observable<IObjetivo[]>{
    return this.http.get<IObjetivo[]>(this.objetivosApiUrl);
  }
  //////////////////////////////////////////
}
