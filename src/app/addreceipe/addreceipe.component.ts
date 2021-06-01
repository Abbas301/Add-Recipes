import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ProductsService} from '../products.service'
import {Product} from '../product'

@Component({
  selector: 'app-addreceipe',
  templateUrl: './addreceipe.component.html',
  styleUrls: ['./addreceipe.component.css']
})
export class AddreceipeComponent implements OnInit {

  constructor( private ps:ProductsService) { }

  ngOnInit(): void {
  }

  onFormSubmit(addProductForm:NgForm) {
    
    console.log(addProductForm.value);
    this.ps.additems(addProductForm.value).subscribe(data =>{

      console.log(data);
        addProductForm.reset();
    })
    
      
  }
}
