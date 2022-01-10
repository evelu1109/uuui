import { Component, OnInit } from '@angular/core';
import { DatabaseinfoService } from '../services/databaseinfo.service';

@Component({
  selector: 'app-cards-section-two',
  templateUrl: './cards-section-two.component.html',
  styleUrls: ['./cards-section-two.component.css']
})
export class CardsSectionTwoComponent implements OnInit {

  constructor(public service:DatabaseinfoService) { }

  ngOnInit(): void {
  }

}
