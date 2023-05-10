import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/modelo/libro';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-cuerpo-romance',
  templateUrl: './cuerpo-romance.component.html',
  styleUrls: ['./cuerpo-romance.component.css']
})
export class CuerpoRomanceComponent implements OnInit{

  libros:any={}

  constructor(private libroService:ProductosService,private router:Router){

  }

  ngOnInit(): void {
    this.libroService.getLibroTipo('Romance').subscribe(data =>{
      this.libros=data;
    })
  }

  pasarLibro(libro:Libro){
    this.router.navigate(['detalle'])
    return this.libroService.pasarLibro(libro)
  }

  

}
