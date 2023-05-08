import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';
import { LoginComponent } from './componentes/login/login.component';
import { AuthGuard } from './helpers/auth.guard';
import { RegistrarComponent } from './componentes/registrar/registrar.component';

const routes: Routes = [
  {path:'',component:CuerpoComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  //{path: 'inicio', component:CuerpoComponent,canActivate:[AuthGuard]},
  {path: 'inicio', component:CuerpoComponent},
  {path:'registro',component:RegistrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
