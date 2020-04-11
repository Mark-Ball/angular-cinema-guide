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

  getMovie(id: number): Movie {
    return this.movies.filter(movie => movie.id === id)[0];
  }

  createMovie(movie: Movie): void {
    this.movies.push({
      id: this.getMovies().length + 1,
      name: movie.name,
      image: 'placeholder.png', // TODO: add image upload
      description: movie.description
    });
  }

  updateMovie(movie: Movie): void {
    console.log(JSON.stringify(movie));
    // find the movie to update
    // change the record in that position
  }
}
