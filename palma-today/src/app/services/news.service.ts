import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { New } from '../interfaces/new';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  //private url: string = "./assets/api/news.json";
  private url: string = "http://palma.today/proves/index2.php";

  // Http client to do crud oprations to the server
  constructor(private http: HttpClient) { }

  // returns the array of news stored on the (local, for now) server
  getAllNews(): Observable<Array<New>> {
    return this.http.get<Array<New>>(this.url);
    
    //return this.http.get(`${this.url}`,{ responseType: 'text' });
  }
}
