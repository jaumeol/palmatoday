import { Injectable, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { New } from '../interfaces/new';
import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

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

  // returns the array of news stored on the server
  // returns the array of news stored on the (local, for now) server
  getAllNews(): void {
    this.http.get<Array<New>>(this.url).toPromise().then((newList) => {
      this.news$.next(newList);
    }).catch(() => { console.log("error en servicio 'news service' getallnews"); });
  }

  getNews(langs: Array<string>): void {

    this.getAllNews$.pipe(
      map(news => (
        news.filter(myNew => {
          let langIndex = langs.indexOf(myNew.lang);
          return langIndex !== -1 ? true : false;
        })
      ))
    )
      .toPromise().then(newList => this.news$.next(newList))
      .catch(() => { console.log("error en servicio 'news service' getallnews"); });
  }

  get getAllNews$(): Observable<Array<New>> {
    return this.http.get<Array<New>>(this.url);
  }

  getNews$() {
    return this.news$;
  }
}
