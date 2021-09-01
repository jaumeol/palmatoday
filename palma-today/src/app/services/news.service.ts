import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { New } from '../interfaces/new';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  //private url: string = "./assets/api/news.json";

  //private url: string = "./assets/getNews.php";
  private url: string = "http://killeracces.atwebpages.com/getNews.php";
  //private url: string = "http://3849301@killeracces.atwebpages.com/killeracces.atwebpages.com/getNews.php";

  // Http client to do crud oprations to the server
  constructor(private http: HttpClient) { }

  // returns the array of news stored on the (local, for now) server
  getAllNews(): Observable<any> {
    return this.http.get<any>(this.url);
    
    //return this.http.get(`${this.url}`,{ responseType: 'text' });
  }
}
