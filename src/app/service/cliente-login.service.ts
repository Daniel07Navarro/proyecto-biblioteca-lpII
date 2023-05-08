import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../modelo/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteLoginService {

  constructor(private http:HttpClient) { }

  private url = "http://localhost:8080/api/clientes/registrar";

  registrar(cliente:Cliente){
    return this.http.post(this.url,cliente)
  }

}
