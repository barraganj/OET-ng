import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  public page_title: string;

  constructor() {

    this.page_title = "Vehiculos";

   }

  ngOnInit(): void {
  }

}
