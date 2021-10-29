// -- Modules --
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Communicate with remote servers
import { HttpClientModule } from '@angular/common/http';

// -- Components --
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { LanguageBarComponent } from './components/language-bar/language-bar.component';
import { SourceDropdownComponent } from './components/source-dropdown/source-dropdown.component';
import { AddContainerComponent } from './components/add-container/add-container.component';
import { FeaturedCarouselComponent } from './components/featured-carousel/featured-carousel.component';
import { NewComponent } from './components/new/new.component';
import { NewPreviewComponent } from './components/new-preview/new-preview.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    LanguageBarComponent,
    SourceDropdownComponent,
    AddContainerComponent,
    FeaturedCarouselComponent,
    NewComponent,
    NewPreviewComponent,
    NewsListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
