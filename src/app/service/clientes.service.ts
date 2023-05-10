import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Credentials } from '../modelo/credentials';
import { Cliente } from '../modelo/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http:HttpClient) { }

  private url:string = "http://localhost:8080/api/clientes";

  getAll(){
    return this.http.get(this.url);
  }

  generateToken(loginData:any){
    return this.http.post("http://localhost:8080/login",loginData);
  }
  
  cerrarSesion(){
    localStorage.removeItem('token');
    localStorage.removeItem('user')
  }

  loginUser(token:any){
    localStorage.setItem('token',token);
    return true;
  }

  getToken(){
    return localStorage.getItem('token')
  }

  getActualUsurio(){
    return this.http.get<Cliente>("http://localhost:8080/login/usuarioLogeado");
  }
  
  setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user))
  }

  estaLogeado(){
    if(this.getToken()!=null){
      return false
    }else{
      return true
    }
  }

}
