import { VentaDetallesItem } from "./venta-detalles-item";

export class Venta {
    idCliente!:number;
    impuesto!:number;
    total!:number;
    ventaDetalles:VentaDetallesItem[]=[];
}
