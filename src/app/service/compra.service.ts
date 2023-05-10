import { Injectable } from '@angular/core';
import { Venta } from '../modelo/venta';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  url = "localhost:8080/api/ventas";
  venta!:Venta;
  comprar(){
    this.http.post(this.url,this.venta)
  }

  addVentaItem(venta:Venta){

  }
  
  
  constructor(private http:HttpClient) { 

  }
}
