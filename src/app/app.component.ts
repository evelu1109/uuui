import { Component } from '@angular/core';
import { DatabaseinfoService } from './services/databaseinfo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(public service: DatabaseinfoService){}
  title = 'ProyectoFinal';

}
