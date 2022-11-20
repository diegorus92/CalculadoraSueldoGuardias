import { Component, Input, OnInit } from '@angular/core';
import { IYear } from 'src/app/Interfaces/IYear';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {

  @Input()year: IYear = {
    id: 0,
    year: 2020,
    idGuardia: 0
  }
 

  constructor() { }

  ngOnInit(): void {
  }

}
