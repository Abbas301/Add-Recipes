import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service'

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  products:any
  

  constructor(private ps:ProductsService) { }

  ngOnInit(): void {
    this.getproducts();
  
  }

  getproducts() 
  {
    this.ps.getitems().subscribe(data =>{
       this.products = data;
       console.log(data);
    })
  }
}
