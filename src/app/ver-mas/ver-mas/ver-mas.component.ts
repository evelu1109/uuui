import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseinfoService } from 'src/app/services/databaseinfo.service';
import {  HttpClient  } from "@angular/common/http"


@Component({
  selector: 'app-ver-mas',
  templateUrl: './ver-mas.component.html',
  styleUrls: ['./ver-mas.component.css']
})
export class VerMasComponent implements OnInit {

  public respuesta:any;

  constructor(private route:ActivatedRoute, public service: DatabaseinfoService,public http: HttpClient ) { }

  ngOnInit(): void {

  this.route.paramMap.subscribe( (paramMap:any) => {
  const {params} = paramMap

  this.cargarData(params.variable) } )

  }


  public infoPost: any[] = [];
  
  cargarData(id:string) {
    this.http.get(`https://angularpagina-b8912-default-rtdb.firebaseio.com/Fotografias/${id}.json`).subscribe( respuesta => { 
    this.respuesta = respuesta;

     //console.log("INFO2" + respuesta);

      }
    )
  }

  public informacion:any[] = this.infoPost;
 
  
}

