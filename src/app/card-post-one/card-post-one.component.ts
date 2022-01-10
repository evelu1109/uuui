import { Component, OnInit, Input } from '@angular/core';
import { DatabaseinfoService } from '../services/databaseinfo.service';

@Component({
  selector: 'app-card-post-one',
  templateUrl: './card-post-one.component.html',
  styleUrls: ['./card-post-one.component.css']
})



  export class CardPostOneComponent implements OnInit {

 @Input() InfoBucle:any

  constructor(public service: DatabaseinfoService) {
  //console.log(this.service.infoPost)
   }

  ngOnInit(): void {}
  
}
