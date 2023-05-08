import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/modelo/cliente';
import { ClienteLoginService } from 'src/app/service/cliente-login.service';
import { ClientesService } from 'src/app/service/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  constructor(private serviceRegistro:ClienteLoginService,private router:Router){

  }

  modeloCliente:Cliente={
    nombreCompleto:'',
    apellido:'',
    telefono:'',
    dni:'',
    email:'',
    direccion:'',
    password:''
  }

  registrarse(){
    this.serviceRegistro.registrar(this.modeloCliente).subscribe((data:any)=>{
      Swal.fire("Usuario guardado","Usuario registrado con exito","success")
      this.router.navigate(['login'])
    })
  }

}
