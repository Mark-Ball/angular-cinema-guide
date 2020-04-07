import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MoviesComponent } from './components/pages/movies/movies.component';
import { MovieComponent } from './components/pages/movie/movie.component';
import { CinemasComponent } from './components/pages/cinemas/cinemas.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:movieId', component: MovieComponent },
  { path: 'cinemas', component: CinemasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
