import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFila } from 'src/app/Interfaces/Ifila';
import { IGuardia } from 'src/app/Interfaces/IGuardia';
import { IMes } from 'src/app/Interfaces/IMes';
import { IObjetivo } from 'src/app/Interfaces/IObjetivo';
import { IYear } from 'src/app/Interfaces/IYear';
import { FacturacionService } from 'src/app/servicios/facturacion.service';
import { GuardiasService } from 'src/app/servicios/guardias.service';

@Component({
  selector: 'app-acceso-tablas',
  templateUrl: './acceso-tablas.component.html',
  styleUrls: ['./acceso-tablas.component.css']
})
export class AccesoTablasComponent implements OnInit {

  guardia!: IGuardia;

  meses:IMes[] = [];
  filas:IFila[] = [];
  objetivos:IObjetivo[] = [];
  years:IYear[] = [];

  yearsOfGuardia: IYear[] = [];
  mesesGuardia: IMes[] = [];


  constructor(private activaterRoute: ActivatedRoute, private servicioGuardia: GuardiasService, private servicioFacturacion: FacturacionService) { }

  ngOnInit(): void {
    //Capturo la información (id del guardia) de la URL
    const routeParams = this.activaterRoute.snapshot.paramMap;
    const guardiaIdDesdeRuta = Number(routeParams.get("guardiaId"));

    //Busco el guardia correspondiente al ID capturado
    console.log("[AccesoTablasComponent]ID del guardia capturado desde la URL: ", guardiaIdDesdeRuta);
    console.log("Guardia: ", this.servicioGuardia.buscarGuardia(guardiaIdDesdeRuta));
    this.guardia = this.servicioGuardia.buscarGuardia(guardiaIdDesdeRuta);

    //Obtenido el Guardia, busco en la BD los años que le corresponde al mismo
    this.servicioFacturacion.getListaYears().subscribe((years)=>{
      //Aprovechando el subscribe cargo las listas y Subjects correspondientes al Year en este componente y el servicio
      this.years = years;
      this.servicioFacturacion.years = this.years;
      this.servicioFacturacion.settearListYears$(years);

      if(this.years.length > 0){
        console.log("Años recuperados: ", this.years);
        this.recuperarYearsDelGuardia(this.years, Number(this.guardia.id));
        console.log("Años recuperados del guardia ", this.guardia.apellido," => ", this.yearsOfGuardia);
      }
      else{
        console.log("No se recuperaron años");
      }

    });

    //Busco los meses pertenecientes al guardia
    this.servicioFacturacion.getListaMeses().subscribe((meses) => {
      this.meses = meses;
      this.servicioFacturacion.meses = meses;
      console.log("[AccesoTablasComponent]Meses en FacturacionService: ", this.servicioFacturacion.meses);
      this.servicioFacturacion.settearListMeses$(meses);

      if(this.meses.length > 0){
        console.log("Meses recuperados: ", this.meses);
        this.recuperarMesesDelGuardia(this.meses, Number(this.guardia.id));
        console.log("Meses recuperados del guardia ", this.guardia.apellido," => ", this.mesesGuardia);
      }
      else{
        console.log("No se recuperaron meses");
      }
    });

    //Cargo las listas y Subject correspondientes a los días/IFila para tenerlos a mano en memoria en FacturacionService
    this.servicioFacturacion.getListaDias().subscribe(dias => {
      this.filas = dias;
      this.servicioFacturacion.dias = dias;
      this.servicioFacturacion.settearListaDia$(dias);
    });

    //Cargo las listas y Subject correspondientes a los Objetivos por lo mismo que los días/IFila y demas listas
    this.servicioFacturacion.getListaObjetivos().subscribe(objetivos => {
      this.objetivos = objetivos;
      this.servicioFacturacion.objetivos = objetivos;
      this.servicioFacturacion.settearListObjetivos$(objetivos);
    });

    //Cargo la lista  y Subject de Registro de Objetivos en el serivcio de facturacion solamente para usarlos en otros componentes de formulario de altas y actualizacion mas adelante
    this.servicioFacturacion.getListaRegistroObjetivos().subscribe(registroObjetivos => {
      this.servicioFacturacion.registroObjetivos = registroObjetivos;
      this.servicioFacturacion.settearListRegistroObjetivos(registroObjetivos);
    });
  }

  private recuperarYearsDelGuardia(years:IYear[], idGuardia:Number):void{
    for(let year of this.years){
      if(year.idGuardia == this.guardia.id){
        this.yearsOfGuardia.push(year);
      }
    }
  }


  private recuperarMesesDelGuardia(meses:IMes[], idGuardia:Number):void{
    for(let mes of this.meses){
      if(mes.idGuardia == this.guardia.id){
        this.mesesGuardia.push(mes);
      }
    }
  }
}
