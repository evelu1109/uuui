import { Component, OnInit } from '@angular/core';
import { DatabaseinfoService } from '../services/databaseinfo.service';


@Component({
  selector: 'app-todas-las-fotos',
  templateUrl: './todas-las-fotos.component.html',
  styleUrls: ['./todas-las-fotos.component.css']
})
export class TodasLasFotosComponent implements OnInit {

  constructor(public service: DatabaseinfoService ) { 


    console.log(this.service.infoPost)

}
  ngOnInit(): void {
  }
}