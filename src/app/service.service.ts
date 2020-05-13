import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _HttpClient:HttpClient) {
   }
   
   getTrending(pageNum):Observable<any>{
     return this._HttpClient.get("https://api.themoviedb.org/3/trending/all/day?api_key=80e8cc7630928165e3803ca72cf71cef&page=1"+pageNum)
   }

   getTrendingMovie():Observable<any>{
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/movie/day?api_key=80e8cc7630928165e3803ca72cf71cef")
  }
  getTrendingTv():Observable<any>{
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/tv/day?api_key=80e8cc7630928165e3803ca72cf71cef")

  }
   getTrendingPeople():Observable<any>{
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/person/day?api_key=80e8cc7630928165e3803ca72cf71cef")
  } 
  
}
