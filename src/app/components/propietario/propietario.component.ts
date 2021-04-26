import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propietario',
  templateUrl: './propietario.component.html',
  styleUrls: ['./propietario.component.css']
})
export class PropietarioComponent implements OnInit {

  public page_title:string;

  constructor() {

    this.page_title = 'Propietarios'

   }

  ngOnInit(): void {
  }

}
