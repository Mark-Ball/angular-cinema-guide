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
    for (let item of this.movies) {
      if (item.id === movie.id) {
        item.name = movie.name;
        item.description = movie.description;
        return;
      }
    }
  }

  deleteMovie(id: number) {
    for (let i in this.movies) {
      if (this.movies[i].id === id) {
        this.movies.splice(+i, 1);
        return;
      }
    }
  }

}
