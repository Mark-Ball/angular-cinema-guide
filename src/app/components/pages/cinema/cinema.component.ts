import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  screeningsByMovie: Array<{ movieId: number, movieName: string, screenings: Array<string> }>;
  hideEditCinemaForm: boolean = true;
  hideAddScreeningForm: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    private cinemaService: CinemaService,
    private screeningService: ScreeningService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('cinemaId');
    })
    this.cinema = this.cinemaService.getCinema(this.id);
    this.imagePath = createImagePath(this.cinema.image);
    this.screeningsByMovie = this.getScreeningsByMovie();
  }

  getScreeningsByMovie(): Array<{ movieId: number, movieName: string, screenings: Array<string> }> {
    const movies = this.movieService.getMovies();
    const result = [];
    for (let movie of movies) {
      result.push({
        movieId: movie.id,
        movieName: movie.name,
        screenings: this.screeningService.getScreenings(movie.id, this.id)
      })
    }
    return result;
  }

  updateScreenings(): void {
    this.screeningsByMovie = this.getScreeningsByMovie();
  }

  deleteCinema(id: number): void {
    this.cinemaService.deleteCinema(id);
    this.router.navigate(['/cinemas']);
  }

  deleteScreening(id: number): void {
    this.screeningService.deleteScreening(id);
    this.updateScreenings();
  }

  toggleAddCinemaForm(): void {
    this.hideEditCinemaForm = !this.hideEditCinemaForm;
  }

  toggleAddScreeningForm(): void {
    this.hideAddScreeningForm = !this.hideAddScreeningForm;
  }

}
