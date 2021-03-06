import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/pages/movies/movies.component';
import { CinemasComponent } from './components/pages/cinemas/cinemas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PosterComponent } from './components/poster/poster.component';
import { MovieComponent } from './components/pages/movie/movie.component';
import { AddMovieFormComponent } from './components/forms/add-movie-form/add-movie-form.component';
import { AddScreeningFormComponent } from './components/forms/add-screening-form/add-screening-form.component';
import { CinemaComponent } from './components/pages/cinema/cinema.component';
import { AddCinemaFormComponent } from './components/forms/add-cinema-form/add-cinema-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CinemasComponent,
    NavbarComponent,
    PosterComponent,
    MovieComponent,
    AddMovieFormComponent,
    AddScreeningFormComponent,
    CinemaComponent,
    AddCinemaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
