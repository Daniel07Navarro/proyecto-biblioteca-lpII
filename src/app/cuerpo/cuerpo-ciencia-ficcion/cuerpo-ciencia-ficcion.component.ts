import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-cuerpo-ciencia-ficcion',
  templateUrl: './cuerpo-ciencia-ficcion.component.html',
  styleUrls: ['./cuerpo-ciencia-ficcion.component.css']
})
export class CuerpoCienciaFiccionComponent implements OnInit{
  libros:any={}

  constructor(private librosService:ProductosService){

  }

  ngOnInit(): void {
    this.librosService.getLibroTipo('Ciencia Ficcion').subscribe(data => {
      this.libros = data;
      console.log(this.libros)
    })
  }
}
