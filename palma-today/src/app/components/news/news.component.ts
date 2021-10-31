import { Component, OnInit } from '@angular/core';
import { New } from 'src/app/interfaces/new';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news: Array<New> = [];

  constructor(private newsService: NewsService) {
    this.refresh();
    
  }

  ngOnInit() {
  }


  refresh() {
    this.newsService.getAllNewsObs().subscribe(
      (news) => {
        this.news = news;
      },
      (err) => {
        console.log("error al suscribirse al observable de news service");
      },
      () => { }
    );
  }

  /*public title: string = "title";
  public section: string = "section";
  public date: Date = new Date("01/01/2021");

  constructor(private newsService: NewsService) { }

  public news: New[] = [];
  public test: number = 0;

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe((res) => {

      const results = res.response.results;

      results.forEach((result: any) => {
        this.news.push({
          title: result.webTitle,
          date: result.webPublicationDate,
          section: result.sectionName,
          url: result.webUrl
        })
      });

      console.log(results[0].webUrl);

    });
  }*/

}
