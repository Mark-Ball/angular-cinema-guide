import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../models/Movie';
import { Cinema } from '../../../models/Cinema';
import { Screening } from '../../../models/Screening';
import { MovieService } from '../../../services/movie.service';
import { CinemaService } from '../../../services/cinema.service';

@Component({
  selector: 'app-add-screening-form',
  templateUrl: './add-screening-form.component.html',
  styleUrls: ['./add-screening-form.component.scss']
})
export class AddScreeningFormComponent implements OnInit {
  movies: Movie[];
  cinemas: Cinema[];
  screening = new Screening(null, null, null, null);

  constructor(
    private movieService: MovieService,
    private cinemaService: CinemaService
  ) { }

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
    this.cinemas = this.cinemaService.getCinemas();
  }

  onSubmit(): void {
    console.log('screening form submitted');
  }

  get diagnostic() {
    return JSON.stringify(this.screening);
  }

}
