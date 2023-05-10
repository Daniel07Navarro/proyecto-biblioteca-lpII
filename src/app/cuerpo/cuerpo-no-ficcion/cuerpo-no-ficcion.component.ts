import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/modelo/libro';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-cuerpo-no-ficcion',
  templateUrl: './cuerpo-no-ficcion.component.html',
  styleUrls: ['./cuerpo-no-ficcion.component.css']
})
export class CuerpoNoFiccionComponent implements OnInit{

  libros:any={}

  constructor(private librosService:ProductosService,private router:Router){

  }
  ngOnInit(): void {
    this.librosService.getLibroTipo('No Ficcion').subscribe(data =>{
      this.libros=data;
    })
  }

  pasarLibro(libro:Libro){
    this.router.navigate(['detalle'])
    return this.librosService.pasarLibro(libro)
  }

}
