import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { NewsPreviewPageComponent } from './pages/news-preview-page/news-preview-page.component';
import { SrcDropdownComponent } from './lang-bar/src-dropdown/src-dropdown.component';
import { LangBarComponent } from './lang-bar/lang-bar.component';
import { NewPreviewComponent } from './pages/news-preview-page/new-preview/new-preview.component';
import { NewComponent } from './pages/new-page/new/new.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SrcDropdownComponent,
    LangBarComponent,
    HomePageComponent,
    NewPageComponent,
    NewsPreviewPageComponent,
    SrcDropdownComponent,
    NewPreviewComponent,
    NewComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
