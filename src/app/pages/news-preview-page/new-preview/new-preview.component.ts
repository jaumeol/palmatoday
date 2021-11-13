import { Component, Input, OnInit } from '@angular/core';
import { New } from 'src/app/interfaces/new';

@Component({
  selector: 'app-new-preview',
  templateUrl: './new-preview.component.html',
  styleUrls: ['./new-preview.component.scss'],
})
export class NewPreviewComponent implements OnInit {
  @Input() new!: New;

  constructor() {}

  ngOnInit(): void {}
}
