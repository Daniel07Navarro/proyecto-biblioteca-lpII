import { Component } from '@angular/core';
import { Cliente } from 'src/app/modelo/cliente';
import { Venta } from 'src/app/modelo/venta';
import { ClientesService } from 'src/app/service/clientes.service';
import { CompraService } from 'src/app/service/compra.service';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  constructor(private libroService:ProductosService,private clienteService:ClientesService,private ventaService:CompraService){

  }

  miCarrito$=this.libroService.miCarrito$;

  totalLibro(price:number,cantidad:number){
    return price*cantidad;
  }

  deleteProduct(id:number){
    this.libroService.deleteLibroCarrito(id);
  }

  updateUnidades(operation:string, id:number){
    const producto = this.libroService.findProductById(id);
    if(producto){
      if(operation==='resta' && producto.cantidad>0){
        producto.cantidad -=1;
      }
      if(operation==='suma'){
        producto.cantidad +=1;
      }
      if(producto.cantidad===0){
        this.deleteProduct(id);
      }
    }
  }

  totalCart(){
    const resultado = this.libroService.totalCart();
    return resultado;
  }

  cliente:Cliente={
    idCliente: 0,
    nombreCompleto:'',
    apellido:'',
    telefono:'',
    dni:'',
    email:'',
    direccion:'',
    password:''
  }

  traerCliente(){
    this.clienteService.getActualUsurio().subscribe((cliente:Cliente)=>{
      //return cliente;
      this.cliente=cliente
    });
    //console.log(this.cliente)
  }

  registrarVenta(){
    this.traerCliente();
    let ventaC!:Venta;
    ventaC.idCliente=this.cliente.idCliente;
    ventaC.total=this.totalCart();
    ventaC.impuesto=this.totalCart()*0.18;
    ventaC.ventaDetalles=this.libroService.listaCarrito;
    this.ventaService.addVentaItem(ventaC);
  }





}
