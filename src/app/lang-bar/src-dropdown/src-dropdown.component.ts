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
  selectedSource: string = '';

  constructor(private langSourceService: LangSourceService) {}

  ngOnInit(): void {}

  setSelectedSource(event: MouseEvent) {
    let source: any = event.target;
    this.selectedSource = `newsPreview/${source.innerText}`;
  }

  sendSource(event: MouseEvent) {
    let source: any = event.target;
    this.langSourceService.setSource(source.innerText);
  }
}
