import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  trendingPeople=[];

  constructor(public _ServieService:ServiceService) { 
    _ServieService. getTrendingPeople().subscribe((data)=>{
      this.trendingPeople=data.results;
    })
  }

  ngOnInit(): void {
  }

}
