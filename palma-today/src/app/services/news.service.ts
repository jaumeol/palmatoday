import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { New } from '../interfaces/new';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  //private url: string = "./assets/api/news.json";
  private url: string = "http://palma.today/proves/index2.php";
  public news$!: Subject<any>;

  // Http client to do crud oprations to the server
  constructor(private http: HttpClient) {
    this.news$ = new Subject<any>();
  }

  // returns the array of news stored on the (local, for now) server
  getAllNews(): void {
    this.http.get<Array<New>>(this.url).subscribe(
      //next
      (newList) => {
        this.news$.next(newList);
      },
      //error
      (error) => {
        console.log("error en servicio 'news service' getallnews");
      },
      //complete
      () => { });
    //return this.http.get(`${this.url}`,{ responseType: 'text' });
  }

  getAllNewsObs(): Observable<Array<New>>{
    return this.http.get<Array<New>>(this.url);
  }

  getNews$(){
    return this.news$;
  }
}
