import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../models/Movie';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.scss']
})
export class AddMovieFormComponent implements OnInit {
  movie = new Movie(99, '', '', '');

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.movieService.createMovie(this.movie);
  }

}
