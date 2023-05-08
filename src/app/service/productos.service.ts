import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }

  private url:string = "http://localhost:8080/api/libros/mostrar";

  getAll(){
    return this.http.get(this.url);
  }

  

}
