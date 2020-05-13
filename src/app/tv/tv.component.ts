import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  trendingTv=[];

  constructor(public _ServieService:ServiceService) { 
    _ServieService.getTrendingTv().subscribe((data)=>{
      this.trendingTv=data.results;
    })
  }

  ngOnInit(): void {
  }

}
