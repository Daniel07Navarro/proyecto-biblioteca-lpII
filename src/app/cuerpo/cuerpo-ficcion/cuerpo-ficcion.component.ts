import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/modelo/libro';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-cuerpo-ficcion',
  templateUrl: './cuerpo-ficcion.component.html',
  styleUrls: ['./cuerpo-ficcion.component.css']
})
export class CuerpoFiccionComponent implements OnInit{

  constructor(private librosService:ProductosService,private router:Router){

  }
  ngOnInit(): void {
    this.librosService.getLibroTipo('Ficcion').subscribe(data => {
      this.libros = data;
      console.log(this.libros)
    })
  }

  libros:any={};

  public getLibroFiccion(){
    
  }

  pasarLibro(libro:Libro){
    this.router.navigate(['detalle'])
    return this.librosService.pasarLibro(libro)
  }


}
