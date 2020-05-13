import { Component, OnInit } from '@angular/core';
import{ ServiceService} from '../service.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentPage=1;
  pageNum:number[]=[];
  term:string;
  trendingAll=[];

  constructor(public _ServieService:ServiceService) { 
    for(let i=1;i<11;i++){
      this.pageNum.push(i);
    }



    _ServieService. getTrending(this.currentPage ).subscribe((data)=>{
      this.trendingAll=data.results;
    })

  }
  changePage(ind){
    this.currentPage=ind
   this._ServieService. getTrending(this.currentPage).subscribe((data)=>{
      this.trendingAll=data.results;
    })
  }
  prev(){
    this.changePage(this.currentPage-1)
  }
  next(){
    this.changePage(this.currentPage+1)
  }

  ngOnInit(): void {
  }

}
