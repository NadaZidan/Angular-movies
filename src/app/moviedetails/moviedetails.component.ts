import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from'@angular/router';
import{ServiceService}from '../service.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
  movieDetails:object;
index;
  constructor(_ActivatedRout:ActivatedRoute,_Service:ServiceService) { 
   this.index= _ActivatedRout.snapshot.paramMap.get("id")
   _Service.getTrending(1).subscribe((data)=>{this.movieDetails=data.results [this.index]

   })
  }

  ngOnInit(): void {
  }

}
