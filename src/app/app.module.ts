import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'; //PARA LOS ICONOS
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HeaderComponent } from './componentes/header/header.component';
import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CuerpoFiccionComponent } from './cuerpo/cuerpo-ficcion/cuerpo-ficcion.component';
import { CuerpoNoFiccionComponent } from './cuerpo/cuerpo-no-ficcion/cuerpo-no-ficcion.component';
import { CuerpoRomanceComponent } from './cuerpo/cuerpo-romance/cuerpo-romance.component';
import { CuerpoHistoriaComponent } from './cuerpo/cuerpo-historia/cuerpo-historia.component';
import { CuerpoCienciaFiccionComponent } from './cuerpo/cuerpo-ciencia-ficcion/cuerpo-ciencia-ficcion.component';
import { CuerpoDetallesComponent } from './cuerpo/cuerpo-detalles/cuerpo-detalles.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    CuerpoComponent,
    FooterComponent,
    LoginComponent,
    RegistrarComponent,
    CuerpoFiccionComponent,
    CuerpoNoFiccionComponent,
    CuerpoRomanceComponent,
    CuerpoHistoriaComponent,
    CuerpoCienciaFiccionComponent,
    CuerpoDetallesComponent,
    CarritoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
