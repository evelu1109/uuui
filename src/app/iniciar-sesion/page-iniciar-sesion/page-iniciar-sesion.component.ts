import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-iniciar-sesion',
  templateUrl: './page-iniciar-sesion.component.html',
  styleUrls: ['./page-iniciar-sesion.component.css']
})
export class PageIniciarSesionComponent implements OnInit {

  usuarioForm = new FormGroup({
    nombreApodo: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  })


public username:any = {}

  constructor() {  }

  ngOnInit(): void {
  }

onSubmit(){
 this.username = this.usuarioForm.value

 console.log(this.username)
  
}


}



