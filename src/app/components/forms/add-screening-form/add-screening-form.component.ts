import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() renderedInsideOf: string;
  @Input() resourceId: number;
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
    let { movieId, cinemaId, time } = this.screening;
    if (this.renderedInsideOf === 'movie') {
      movieId = this.resourceId;
    }
    if (this.renderedInsideOf == 'cinema') {
      cinemaId = this.resourceId;
    }
    this.screeningService.createScreening(+movieId, +cinemaId, time);
    this.updater.emit(); // causes parent to update screenings
  }

}
