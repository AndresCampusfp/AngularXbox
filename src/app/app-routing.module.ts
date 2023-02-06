import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./paginas/home/home.component";
import { ContactComponent} from "./paginas/contact/contact.component";
import { TiendaComponent } from "./paginas/tienda/tienda.component";
import { UsuariosComponent } from "./paginas/usuarios/usuarios.component";

const routes: Routes = [
  {path: "", component: HomeComponent },
  {path: "contacto", component: ContactComponent},
  {path: "tienda", component: TiendaComponent},
  {path: "usuario", component: UsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
