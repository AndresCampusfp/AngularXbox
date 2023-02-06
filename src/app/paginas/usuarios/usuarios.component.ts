import { Component } from '@angular/core';
import * as e from 'cors';
import { Usuario } from 'src/app/modelos/usuario';
import { UsuarioServices } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent {
  public ocultar: boolean;;
  public user: Usuario;
  public usuarios: Usuario[];

  constructor(public usuarioService: UsuarioServices) {
    this.ocultar= true;
    this.user = usuarioService.user;
    this.usuarios= usuarioService.usuarios;
    //this.user = new Usuario("Andres", "Sanchez", "andressanchez@gmail.com");
    //this.usuarios = [
      //new Usuario("Andres", "Sanchez", "andressanchez@gmail.com"),
      //new Usuario("Dani", "Sanchez", "andressanchez@gmail.com", "1234"),
      //new Usuario("Marcos", "Sanchez", "andressanchez@gmail.com"),
      //new Usuario("Jose", "Sanchez", "andressanchez@gmail.com")
    //];
    this.ocultar = true;
  }

  MostrarInfo() {
    this.ocultar = !this.ocultar;
    //this.user.nombre="MAIK";
  }

  CambiarInfo(nombre:HTMLInputElement, apellidos:HTMLInputElement, email:string) {
    nombre.style.borderColor="red";
    //this.user = new Usuario(nombre.value, apellidos.value, email);
    this.user = new Usuario(nombre.value, apellidos.value, email);
  }

  activarPassword(password:HTMLInputElement) {
    console.log("hola");
    password.style.visibility="visible";
  }

}
