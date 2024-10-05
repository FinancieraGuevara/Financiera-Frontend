import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {UserService} from "../../Servicios/Usuario/user.service";
import {LoginService} from "../../Servicios/LoginService";
import {NavegadorComponent} from "../navegador/navegador.component";

@Component({
  selector: 'app-iniciosesion',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NavegadorComponent, RouterLink],
  templateUrl: './iniciosesion.component.html',
  styleUrl: './iniciosesion.component.scss'
})
export class IniciosesionComponent {
  formUser: FormGroup;

  constructor( private formBuilder: FormBuilder, private router: Router, private userService: UserService, private loginService: LoginService){

    this.formUser = this.formBuilder.group({
      'email': ['',[Validators.required,Validators.email]],
      'password': ['',[Validators.required,Validators.minLength(8)]]
    })
  }

  get email(){
    return this.formUser.get('email') as FormControl;
  }

  get password(){
    return this.formUser.get('password') as FormControl;
  }

  enviar(){
    if(this.formUser.valid){
      const userData = {
        email: this.email.value,
        password: this.password.value
      };
      console.log('Datos a enviar:', userData);
      this.loginService.Onlogin(userData).subscribe({
        next: (response: any) => {
          console.log('Inicio exitoso:', response);
          this.router.navigate(['/inicio']);
        },
        error: (error) => {
          console.error('Error al iniciar:', error);
          alert('Credenciales incorrectas.');
        }
      });
    } else {
      console.log('Formulario inválido');
    }
  }
}
