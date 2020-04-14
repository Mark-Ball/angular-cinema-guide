import { Injectable } from '@angular/core';
import { Movie } from '../models/Movie';
import { movies } from '../models/data';
import { ScreeningService } from './screening.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movie[] = movies;

  constructor(private screeningService: ScreeningService) { }

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovie(id: number): Movie {
    return this.movies.filter(movie => movie.id === id)[0];
  }

  createMovie(movie: Movie): void {
    // if there are movies, id is 1 greater than id of last element, else id is 1
    // this handles the case where all movies have been deleted
    let id;
    if (this.movies[0]) {
      id = this.movies[this.movies.length - 1].id + 1;
    } else {
      id = 1;
    }
    this.movies.push({
      id,
      name: movie.name,
      image: 'placeholder.png',
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
        break;
      }
    }
    // delete orphan records
    for (let screening of this.screeningService.getScreenings(id, null)) {
      this.screeningService.deleteScreening(screening.id);
    }
  }

}
