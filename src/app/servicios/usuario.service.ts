import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})

export class UsuarioServices {
  public user:Usuario;
  public usuarios: Usuario[];

  constructor() {
    this.user = new Usuario("Andres", "Sanchez", "andressanchez@gmail.com");
    this.usuarios = [
      new Usuario("Andres", "Sanchez", "andressanchez1@gmail.com"),
      new Usuario("Dani", "Sanchez", "andressanchez2@gmail.com", "1234"),
      new Usuario("Marcos", "Sanchez", "andressanchez3@gmail.com"),
      new Usuario("Jose", "Sanchez", "andressanchez4@gmail.com")
    ];
  }

  eliminarUsuario(correo: string){
    for (let i = 0; i < this.usuarios.length; i++) {
      if(this.usuarios[i].email == correo) {
        this.usuarios.splice(i, 1);
      }
    }
  }
  
  cambiarContraseña(correo:string, password:string) {
    for (let i = 0; i < this.usuarios.length; i++) {
      if(this.usuarios[i].email == correo) {
        this.usuarios[i].password = password;
      }
    }
  }

}