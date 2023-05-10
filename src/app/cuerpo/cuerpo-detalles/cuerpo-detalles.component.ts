import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/modelo/libro';
import { ProductosService } from 'src/app/service/productos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientesService } from 'src/app/service/clientes.service';
import { Cliente } from 'src/app/modelo/cliente';

@Component({
  selector: 'app-cuerpo-detalles',
  templateUrl: './cuerpo-detalles.component.html',
  styleUrls: ['./cuerpo-detalles.component.css']
})
export class CuerpoDetallesComponent {

  constructor(private libroService:ProductosService,private router:Router,private clienteService:ClientesService){

  }

  myLibroDetalle$=this.libroService.myLibroDetalle$

  regresar(){
    this.libroService.volver()
    this.router.navigate(['inicio'])
  }

  addToCart(libro:Libro){
    alert("agregado al carrito")
    return this.libroService.añadirLibroCarrito(libro);
  }

  

}
