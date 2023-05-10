import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-cuerpo-historia',
  templateUrl: './cuerpo-historia.component.html',
  styleUrls: ['./cuerpo-historia.component.css']
})
export class CuerpoHistoriaComponent implements OnInit{

  libros:any={}

  constructor(private librosService:ProductosService){

  }

  ngOnInit(): void {
    this.librosService.getLibroTipo('Historia').subscribe(data => {
      this.libros = data;
      console.log(this.libros)
    })
  }

}
