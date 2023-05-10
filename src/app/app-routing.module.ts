import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';
import { LoginComponent } from './componentes/login/login.component';
import { AuthGuard } from './helpers/auth.guard';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { CuerpoFiccionComponent } from './cuerpo/cuerpo-ficcion/cuerpo-ficcion.component';
import { CuerpoNoFiccionComponent } from './cuerpo/cuerpo-no-ficcion/cuerpo-no-ficcion.component';
import { CuerpoRomanceComponent } from './cuerpo/cuerpo-romance/cuerpo-romance.component';
import { CuerpoHistoriaComponent } from './cuerpo/cuerpo-historia/cuerpo-historia.component';
import { CuerpoCienciaFiccionComponent } from './cuerpo/cuerpo-ciencia-ficcion/cuerpo-ciencia-ficcion.component';
import { CuerpoDetallesComponent } from './cuerpo/cuerpo-detalles/cuerpo-detalles.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';

const routes: Routes = [
  {path:'',component:CuerpoComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path: 'inicio', component:CuerpoComponent,canActivate:[AuthGuard]},
  {path:'registro',component:RegistrarComponent},
  {path:'ficcion',component:CuerpoFiccionComponent,canActivate:[AuthGuard]},
  {path:'noFiccion',component:CuerpoNoFiccionComponent,canActivate:[AuthGuard]},
  {path:'romance',component:CuerpoRomanceComponent,canActivate:[AuthGuard]},
  {path:'historia',component:CuerpoHistoriaComponent,canActivate:[AuthGuard]},
  {path:'cienciaFiccion',component:CuerpoCienciaFiccionComponent,canActivate:[AuthGuard]},
  {path:'detalle',component:CuerpoDetallesComponent,canActivate:[AuthGuard]},
  {path:'carrito',component:CarritoComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
