// import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Route } from '@angular/router';
import {ProductsService} from '../products.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  products:any

  constructor(private ps:ProductsService) { }

  ngOnInit(): void {
    this.loadproductdetails();
  }

  loadproductdetails() 
  {
    this.ps.getitems().subscribe(data =>{
      this.products = data;
    })
  }


}
