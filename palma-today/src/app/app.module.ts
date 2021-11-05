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
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { AppRoutingModule } from './app-routing.module';
import { SideBarComponent } from './components/side-bar/side-bar.component';

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
    NavbarComponent,
    AboutUsPageComponent,
    ContactUsPageComponent,
    NewsPageComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
