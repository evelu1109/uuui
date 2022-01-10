import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-inicio',
  templateUrl: './page-inicio.component.html',
  styleUrls: ['./page-inicio.component.css']
})
export class PageInicioComponent implements OnInit {


  
  public Titulo = "¡Ultimas Fotografias!"

  public Subtitulo = "¡Mira lo ultimo que han compartido nuestros talentosos artistas y maravillate con sus obras!"

  constructor() { }

  ngOnInit(): void {
  }

}


