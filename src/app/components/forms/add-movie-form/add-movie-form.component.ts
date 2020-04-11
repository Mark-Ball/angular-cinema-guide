import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../../models/Movie';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.scss']
})
export class AddMovieFormComponent implements OnInit {
  @Input() movie: Movie;
  movieName: string;
  movieDescription: string;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieName = this.movie.name;
    this.movieDescription = this.movie.description;
    // if component was not passed a movie, create a new blank one
    if (!this.movie) {
      this.movie = new Movie(null, '', '', '');
    }
  }

  onSubmit(): void {
    // update an existing movie if there was an id
    // create a new movie if there was no id
    // if (this.movie.id) {
    //   this.movieService.updateMovie(this.movie)
    // } else {
    //   this.movieService.createMovie(this.movie);
    // }
  }

}
