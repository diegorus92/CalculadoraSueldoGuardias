import { Injectable } from '@angular/core';
import { IYear } from '../Interfaces/IYear';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IMes } from '../Interfaces/IMes';

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

  private listYears = new BehaviorSubject<IYear[]>([]);
  private listMeses = new BehaviorSubject<IMes[]>([]);
  YearApiUrl = "http://localhost:3000/years";
  mesesApiUrl = "http://localhost:3000/meses"

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

  /////////////////////////////////////////////


  ////////////////Objetivos//////////////////

  //////////////////////////////////////////
}
