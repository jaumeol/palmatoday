import { NgModule } from '@angular/core';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: NewsPageComponent},
  { path: 'about-us', component: AboutUsPageComponent},
  { path: 'contact-us', component: ContactUsPageComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
