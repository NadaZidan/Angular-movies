import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  trendingMovie=[];

  constructor(public _ServieService:ServiceService) { 
    _ServieService.getTrendingMovie().subscribe((data)=>{
      this.trendingMovie=data.results;
    })
  }


  ngOnInit(): void {
  }

}
