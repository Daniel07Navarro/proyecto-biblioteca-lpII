import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/modelo/credentials';
import { ClientesService } from 'src/app/service/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  creds:Credentials={
    username: '',
    password: ''
  };

  formulario!:FormGroup;

  submitted = false;//variable booleana 

  constructor(private service:ClientesService,private router:Router,private fb:FormBuilder,private snack:MatSnackBar){
    this.formulario =this.fb.group({
      //codigo:['',Validators.compose([Validators.required,Validators.pattern('[0-9]+')])],
      username:['',Validators.required],
      password:['',Validators.required]
      //apellido:['',Validators.required],
      //correo:['',Validators.compose([Validators.required,Validators.email])], //PARA VARIAS VALIDACIONES
      //fecha:['',Validators.compose([Validators.required,Validators.pattern(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/)])],
      //telefono:['',Validators.compose([Validators.required])]
      
    });
  }

  
  login(form:any): void{
    this.submitted=true;
    if(this.formulario.invalid){
        return;
    }
    console.log("form value",form.value)
    
    this.service.generateToken(this.creds).subscribe((data:any)=>{
      this.service.loginUser(data.token);
      this.service.getActualUsurio().subscribe((user:any)=>{
        this.service.setUser(user);
        console.log(user)
      })
      Swal.fire("LOGIN EXITOSO!!","LOGIN EXITOSO!!","success")
      this.router.navigate(["inicio"])
    },(error) =>{
      this.snack.open('Detalles Invalidos','Aceptar',{
        duration: 3000,
      })
    })
  }



}
