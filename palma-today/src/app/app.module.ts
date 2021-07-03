// -- Modules --
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Communicate with remote servers
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

// -- Services --
// Used to simulate calls to a remote server and do CRUD operations
// TODO: delete when server is done and running
import { InMemoryDataService } from './in-memory-data.service';

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
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // TODO: delete when server is done and running
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
