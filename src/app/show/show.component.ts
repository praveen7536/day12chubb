import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '../products.service'


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  proddetails;
  pid;

  constructor(private ar:ActivatedRoute,public productsService:ProductsService) {
    this.pid=this.ar.snapshot.params.id;
    this.productsService.getService().subscribe((data :any[])=>{
      console.log(this.pid);
      this.proddetails=data;
      console.log(this.proddetails)
    })
   }

  ngOnInit(): void {
  }

}
