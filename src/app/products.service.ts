import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getitems() 
  {
    return this.http.get("http://localhost:3000/items")
  }

  // getproductdetails() 
  // {
  //   return this.http.get("http://localhost:3000/items")
  // }

  additems(id:any) 
  {
    return this.http.post("http://localhost:3000/items",id)
  }
}
