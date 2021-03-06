import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../models/Movie';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
	movies: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
		this.movies = this.movieService.getMovies();
  }

}
