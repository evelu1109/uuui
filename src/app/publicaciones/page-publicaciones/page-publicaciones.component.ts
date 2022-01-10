import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-publicaciones',
  templateUrl: './page-publicaciones.component.html',
  styleUrls: ['./page-publicaciones.component.css']
})
export class PagePublicacionesComponent implements OnInit {

  public titulo = "Todas las publicaciones"

  public subtitulo = "¡Aca podes encontrar todas las imagenes que se han subido!"

  constructor() { }

  ngOnInit(): void {
  }

}
