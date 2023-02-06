import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './paginas/home/home.component';
import { ContactComponent } from './paginas/contact/contact.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { TiendaComponent } from './paginas/tienda/tienda.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    TiendaComponent,
    GaleriaComponent,
    UsuariosComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
