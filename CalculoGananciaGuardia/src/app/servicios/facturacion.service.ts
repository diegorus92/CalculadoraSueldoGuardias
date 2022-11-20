import { Injectable } from '@angular/core';
import { IYear } from '../Interfaces/IYear';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";

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
  private listYears = new BehaviorSubject<IYear[]>([]);
  YearApiUrl = "http://localhost:3000/years";

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

  ///////////////////////////////////////////////


  /////////////Filas-Dias//////////////////////

  /////////////////////////////////////////////


  ////////////////Objetivos//////////////////

  //////////////////////////////////////////
}
