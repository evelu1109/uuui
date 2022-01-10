import { Component, OnInit, Input } from '@angular/core';
import { DatabaseinfoService } from '../services/databaseinfo.service';

@Component({
  selector: 'app-card-post-two',
  templateUrl: './card-post-two.component.html',
  styleUrls: ['./card-post-two.component.css']
})
export class CardPostTwoComponent implements OnInit {

  @Input() InfoBucle:any

  constructor(public service: DatabaseinfoService) { }

  ngOnInit(): void {
  }

}
