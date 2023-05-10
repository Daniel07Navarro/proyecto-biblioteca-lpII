import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/service/clientes.service';
import { TiposService } from 'src/app/service/tipos.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public service:ClientesService,public tiposService:TiposService,private router:Router){

  }

  tipos:any ={};

  traerTipos(){
    this.tiposService.getTipos().subscribe((data:any) =>{
      this.tipos=data;
      console.log(data)
    })
  }

  verCarrito:boolean=false;

  mostrarCarrito(){
    this.router.navigate(['carrito'])
  }



}
