import { Component, OnInit } from '@angular/core';
import { Conductore } from '../../models/conductore';
import { Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-conductore-new',
  templateUrl: './conductore-new.component.html',
  styleUrls: ['./conductore-new.component.css']
})
export class ConductoreNewComponent implements OnInit {
  
  public page_title: string;

  constructor(

    public conductore: Conductore,
    private_route: ActivatedRoute,
    private_router: Router

  ) {

  
    this.page_title = 'Nuevo conductor';

   }

  ngOnInit(): void {
    this.conductore = new Conductore(1,1,'','','','','',1);
    console.log(this.conductore);
  }

  


}
