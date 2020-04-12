import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../../models/Movie';
import { Cinema } from '../../../models/Cinema';
import { Screening } from '../../../models/Screening';
import { MovieService } from '../../../services/movie.service';
import { CinemaService } from '../../../services/cinema.service';
import { ScreeningService } from '../../../services/screening.service';
import { createImagePath } from '../../../services/utils';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: Movie;
  id: number;
  imagePath: string;
  cinemas: Cinema[];
  screeningsByCinema: Array<{ cinemaId: number, cinemaName: string, screenings: Array<string> }>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    private cinemaService: CinemaService,
    private screeningService: ScreeningService
  ) { }

  ngOnInit(): void {
    // extract id from params
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('movieId');
    })
    // get movie based on id
    this.movie = this.movieService.getMovie(this.id);
    this.imagePath = createImagePath(this.movie.image);
    this.cinemas = this.cinemaService.getCinemas();

    // loop through cinemas and get screenings at each
    this.screeningsByCinema = this.getScreeningsByCinema();
  }

  getScreeningsByCinema(): Array<{ cinemaId: number, cinemaName: string, screenings: Array<string> }> {
    const result = [];
    for (let i = 1; i <= this.cinemas.length; i++) {
      result.push({
        cinemaId: i,
        cinemaName: this.cinemas[i - 1].name,
        screenings: this.screeningService.getScreenings(this.id, i)
      })
    }
    return result;
  }

  // trigger an update when new data is entered in child
  updateScreenings(): void {
    this.screeningsByCinema = this.getScreeningsByCinema();
  }

  deleteMovie(id: number): void {
    this.movieService.deleteMovie(id);
    this.router.navigate(['/movies']);
  }

}
