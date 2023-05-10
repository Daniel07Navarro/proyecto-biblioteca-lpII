import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ProductosService } from 'src/app/service/productos.service';
import { Router } from '@angular/router';
import { Libro } from 'src/app/modelo/libro';


@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit{
  
  libros:Libro[]=[];

  constructor(private libroService:ProductosService,private router:Router){

  }

  public page!:number;
  
  ngOnInit(): void {
    this.libroService.getAll().subscribe(data =>{
      this.libros=data;
      console.log(data)
    })
  }

  libro!:Libro;

  findById(id:any){
    this.libroService.getLibroById(id).subscribe((data:any) =>{
      this.libro=data
    })
  }

  pasarLibro(libro:Libro){
    this.router.navigate(['detalle'])
    return this.libroService.pasarLibro(libro)
  }

  

  /*
  pasarLibro(){
    this.service.pasarLibro(this.libro);
  }*/


  



}
