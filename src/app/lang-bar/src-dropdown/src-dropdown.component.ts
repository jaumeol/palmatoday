import { Component, Input, OnInit } from '@angular/core';
import { LangSourceService } from 'src/app/services/langSource.service';

@Component({
  selector: 'app-src-dropdown',
  templateUrl: './src-dropdown.component.html',
  styleUrls: ['./src-dropdown.component.scss'],
})
export class SrcDropdownComponent implements OnInit {
  @Input() lang: string = '';
  @Input() sources: string[] = [];

  constructor(private langSourceService: LangSourceService) {}

  ngOnInit(): void {}

  sendSource(event: MouseEvent) {
    let source: any = event.target;
    //console.log(source.innerText);
    this.langSourceService.setSource(source.innerText);
  }
}
