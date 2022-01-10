import { Component, OnInit, Input } from '@angular/core';
import { DatabaseinfoService } from '../services/databaseinfo.service';

@Component({
  selector: 'app-cards-section-one',
  templateUrl: './cards-section-one.component.html',
  styleUrls: ['./cards-section-one.component.css']
})
export class CardsSectionOneComponent implements OnInit {

  @Input() sectionTitle:any

  @Input() sectionSubtitle:any

  constructor(public service: DatabaseinfoService) { 

    console.log(this.service.infoPost)

}
  ngOnInit(): void {
  }
}

