// -- Modules --
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Communicate with remote servers
import { HttpClientModule } from '@angular/common/http';

// -- Components --
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
