import { Component, OnInit } from '@angular/core';
import { Source } from 'src/app/interfaces/new';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-source-dropdown',
  templateUrl: './source-dropdown.component.html',
  styleUrls: ['./source-dropdown.component.scss']
})
export class SourceDropdownComponent implements OnInit {

  public sources: Array<Source> = [];
  public selectedSources: Array<Source> = [];

  constructor(private newsService: NewsService) {
    
  }

  ngOnInit(): void {
  }

}
