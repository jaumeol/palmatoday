import { Component, OnInit } from '@angular/core';
import { MallorcaMagazineService } from 'src/app/services/mallorcaMagazine.service';
import { New } from 'src/app/interfaces/new';
import { LangSourceService } from 'src/app/services/langSource.service';

@Component({
  selector: 'app-news-preview-page',
  templateUrl: './news-preview-page.component.html',
  styleUrls: ['./news-preview-page.component.scss'],
})
export class NewsPreviewPageComponent implements OnInit {
  source!: string;
  news: Array<New> = [];

  constructor(
    private newsService: MallorcaMagazineService,
    private langSourceService: LangSourceService
  ) {
    this.source = this.langSourceService.source;
    this.langSourceService.onChangeSource.subscribe(
      () => (this.source = this.langSourceService.source)
    );

    this.newsService.news$.subscribe(
      (next) => {
        this.news = next;
      },
      (err) => {
        console.log('error al suscribirse al observable de news service');
      },
      () => {}
    );
  }

  ngOnInit() {
    this.refresh();
    this.source = this.langSourceService.source;
  }

  refresh() {
    this.newsService.getAllNews();
  }
}
