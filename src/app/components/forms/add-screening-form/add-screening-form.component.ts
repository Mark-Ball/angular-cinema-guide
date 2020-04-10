import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../../models/Movie';
import { Cinema } from '../../../models/Cinema';
import { Screening } from '../../../models/Screening';
import { MovieService } from '../../../services/movie.service';
import { CinemaService } from '../../../services/cinema.service';
import { ScreeningService } from '../../../services/screening.service';

@Component({
  selector: 'app-add-screening-form',
  templateUrl: './add-screening-form.component.html',
  styleUrls: ['./add-screening-form.component.scss']
})
export class AddScreeningFormComponent implements OnInit {
  movies: Movie[];
  cinemas: Cinema[];
  screening = new Screening(null, null, null, null);
  @Output() updater = new EventEmitter();

  constructor(
    private movieService: MovieService,
    private cinemaService: CinemaService,
    private screeningService: ScreeningService
  ) { }

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
    this.cinemas = this.cinemaService.getCinemas();
  }

  onSubmit(): void {
    const { movieId, cinemaId, time } = this.screening;
    this.screeningService.createScreening(+movieId, +cinemaId, time);
    this.updater.emit();
  }

  get diagnostic() {
    return JSON.stringify(this.screening);
  }

}
