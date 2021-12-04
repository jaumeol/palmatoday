import { EventEmitter, Injectable } from '@angular/core';
import { LangSource } from '../interfaces/langSource';

@Injectable({
  providedIn: 'root',
})
export class LangSourceService {
  private _langSources: LangSource[] = [
    { lang: 'ENGLISH', src: ['Source1', 'Source2', 'Source3'] },
    { lang: 'CASTELLANO', src: ['Source4', 'Source5', 'Source6'] },
    { lang: 'CATALÀ', src: ['Source7', 'Source8', 'Source9'] },
    { lang: 'DEUSTCH', src: ['Source10', 'Source11'] },
  ];

  onChangeSource = new EventEmitter<any>();
  source: string = '';

  get langSources(): LangSource[] {
    return [...this._langSources];
  }

  constructor() {}

  setSource(source: string) {
    this.source = source;
    //console.log(source);
    this.onChangeSource.emit();
  }
}
