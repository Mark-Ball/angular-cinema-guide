import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MoviesComponent } from './components/pages/movies/movies.component';
import { AddMovieFormComponent } from './components/forms/add-movie-form/add-movie-form.component';
import { MovieComponent } from './components/pages/movie/movie.component';
import { CinemasComponent } from './components/pages/cinemas/cinemas.component';
import { AddCinemaFormComponent } from './components/forms/add-cinema-form/add-cinema-form.component';
import { CinemaComponent } from './components/pages/cinema/cinema.component';


const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/add', component: AddMovieFormComponent },
  { path: 'movies/:movieId', component: MovieComponent },
  { path: 'cinemas', component: CinemasComponent },
  { path: 'cinemas/add', component: AddCinemaFormComponent },
  { path: 'cinemas/:cinemaId', component: CinemaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
