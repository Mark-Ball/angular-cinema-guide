import { Injectable } from '@angular/core';
import { Movie } from '../models/Movie';
import { movies } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movie[] = movies;

  constructor() { }

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovie(id: string): Movie {
    return this.movies.filter(movie => movie.id == id)[0];
  }
}
