import { Injectable, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { New, Source } from '../interfaces/new';
import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  //private url: string = "./assets/api/news.json";
  private url: string = "http://palma.today/proves/index2.php";
  public news$!: Subject<any>;

  public sources: Array<Source> = [
    Source.ElCastellet,
    Source.MDBulletin,
    Source.TheGuardian
  ];

  // Http client to do crud oprations to the server
  constructor(private http: HttpClient) {
    this.news$ = new Subject<any>();
  }

  /**
   * returns the array of news stored on the server
   */
  getAllNews(): void {
    this.http.get<Array<New>>(this.url).toPromise().then((newList) => {
      this.news$.next(newList);
    }).catch(() => { console.log("error en servicio 'news service' getallnews"); });
  }

  /**
   * Returns promise with all the news filtered by source.
   * @param sources the sources of the news to be displayed
   * 
   * TODO: mejorar el funcionamiento del filtrado (eg: solo filtrar por las que se tenga, si no bastan
   * llamar a server para cargar más (por paginación), etc )
   */
  getNews(sources: Array<Source>): void {

    this.getAllNews$.pipe(
      map(news => (                                         // <- Por cada noticia individual. En este caso devuelve array de noticias con el filtro aplicado
        news.filter(myNew => {                              // <- Devuelve solo las noticias que cumplan con el filtro
          let sourceIndex = sources.indexOf(myNew.source);  // <- Mira si la fuente de la noticia existe en el array de fuentes deseado
          return sourceIndex !== -1 ? true : false;         // <- -1 si no coincide con ninguna fuente especificada, >=0 si noticia tiene misma funete que en la lista "sources"
        })
      ))
    )
      .toPromise().then(newList => this.news$.next(newList))
      .catch(() => { console.log("error en servicio 'news service' getallnews"); });
  }

  /**
   * Returns the petition observable
   */
  get getAllNews$(): Observable<Array<New>> {
    return this.http.get<Array<New>>(this.url);
  }

  getNews$() {
    return this.news$;
  }
}
