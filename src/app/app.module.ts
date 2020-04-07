import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/pages/movies/movies.component';
import { CinemasComponent } from './components/pages/cinemas/cinemas.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CinemasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
