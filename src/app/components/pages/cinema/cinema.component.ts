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
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {
  cinema: Cinema;
  id: number;
  imagePath: string;
  movies: Movie[];
  screeningsByMovie: Array<{ movieId: number, movieName: string, screenings: Array<string> }>;

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
      this.id = +params.get('cinemaId');
    })
    // get cinema based on id
    this.cinema = this.cinemaService.getCinema(this.id);
    this.imagePath = createImagePath(this.cinema.image);
    this.movies = this.movieService.getMovies();
    this.screeningsByMovie = this.getScreeningsByMovie();
  }

  getScreeningsByMovie(): Array<{ movieId: number, movieName: string, screenings: Array<string> }> {
    const result = [];
    for (let i = 1; i <= this.movies.length; i++) {
      result.push({
        movieId: i,
        movieName: this.movies[i - 1].name,
        screenings: this.screeningService.getScreenings(i, this.id)
      })
    }
    return result;
  }

  // trigger an update when new data is entered in child
  updateScreenings() {
    this.screeningsByMovie = this.getScreeningsByMovie();
  }

  deleteCinema(id: number): void {
    this.cinemaService.deleteCinema(id);
    this.router.navigate(['/cinemas']);
  }

}
