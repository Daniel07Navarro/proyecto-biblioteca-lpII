import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit{
  
  libros:any={};

  constructor(private service:ProductosService){

  }
  ngOnInit(): void {
    this.service.getAll().subscribe(data =>{
      this.libros=data;
      console.log(data)
    })
  }



}
