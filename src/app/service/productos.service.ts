import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from '../modelo/libro';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }

  private url:string = "http://localhost:8080/api/libros/mostrar";

  private myLibroDetalle = new BehaviorSubject<Libro[]>([])
  myLibroDetalle$=this.myLibroDetalle.asObservable();

  private libroDetalles:Libro[] = []; 

  public listaCarrito:Libro[]=[];

  private miCarrito = new BehaviorSubject<Libro[]>([]);
  miCarrito$=this.miCarrito.asObservable()

  getAll():Observable<Libro[]>{
    return this.http.get<Libro[]>(this.url);
  }

  getLibroTipo(tipo:any){
    return this.http.get(`http://localhost:8080/api/libros/tipo?nombre=${tipo}`)
  }

  getLibroById(id:any){
    return this.http.get(`http://localhost:8080/api/libros/buscar?id=${id}`);
  }

  pasarLibro(libro:Libro){
    this.libroDetalles.push(libro)
    this.myLibroDetalle.next(this.libroDetalles)
  }

  volver(){
    this.libroDetalles.pop()
    this.myLibroDetalle.next(this.libroDetalles)
  }

  añadirLibroCarrito(libro:Libro){
    if(this.listaCarrito.length===0){ //si esta vacia
      libro.cantidad = 1;
      this.listaCarrito.push(libro) //añadimos el producto
      this.miCarrito.next(this.listaCarrito);
    }else{ 
      const productoModificado = this.listaCarrito.find((elemento)=> {
        return elemento.idLibro==libro.idLibro;
      })
      if(productoModificado){ //si lo encuentra
        productoModificado.cantidad += 1;
        this.miCarrito.next(this.listaCarrito);
      }else{ //si el producto es nuevo
        libro.cantidad=1;
        this.listaCarrito.push(libro) //añadimos el producto
        this.miCarrito.next(this.listaCarrito);
      }
    }
  }

  deleteLibroCarrito(id:number){ 
    this.listaCarrito = this.listaCarrito.filter((libro)=>{
      return libro.idLibro!= id
    })
    this.miCarrito.next(this.listaCarrito)
  }

  findProductById(id:number){
    return this.listaCarrito.find((libro)=>{
      return libro.idLibro === id;
    })
  }

  totalCart(){
    const total = this.listaCarrito.reduce(function(acc,libro){
      return acc+(libro.cantidad*libro.precio);
    },0)
    return total;
  }



  

  

}
