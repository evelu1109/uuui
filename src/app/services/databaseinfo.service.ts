import { Injectable } from '@angular/core';
import {  HttpClient  } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class DatabaseinfoService {

  constructor( public http: HttpClient ) {
   // console.log("publicaciones listas");
    this.cargarDatos()
   }

   public infoPost: any[] = [];

   public cargarDatos() {
     this.http.get('https://angularpagina-b8912-default-rtdb.firebaseio.com/Fotografias.json').subscribe((resp: any) => { 
     this.infoPost = resp;

     //console.log(this.infoPost)

    })
    
    
  }
  public informacion:any[] = this.infoPost;
}