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
  newMovie: Movie;
  movieId: number;
  movieName: string;
  movieDescription: string;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    // if a movie is passed, take details from that movie
    if (this.movie) {
      const { id, name, description } = this.movie;
      this.newMovie = new Movie(id, name, '', description);
    // if no movie is passed, create a blank movie
    } else {
      this.newMovie = new Movie(null, '', '' ,'')
    }
  }

  onSubmit(): void {
    // update an existing movie if there was an id
    // create a new movie if there was no id
    if (this.newMovie.id) {
      this.movieService.updateMovie(this.newMovie)
    } else {
      this.movieService.createMovie(this.newMovie);
    }
  }

}
