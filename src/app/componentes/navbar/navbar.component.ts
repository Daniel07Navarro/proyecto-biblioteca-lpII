import { Component } from '@angular/core';
import { ClientesService } from 'src/app/service/clientes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public service:ClientesService){

  }



}
