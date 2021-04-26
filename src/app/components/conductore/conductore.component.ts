import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conductore',
  templateUrl: './conductore.component.html',
  styleUrls: ['./conductore.component.css']
})
export class ConductoreComponent implements OnInit {

  public page_title:string;

  constructor() {

    this.page_title="Conductores";

   }

  ngOnInit(): void {
  }

}
