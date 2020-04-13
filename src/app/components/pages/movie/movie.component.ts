import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../../models/Movie';
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
  screeningsByCinema: Array<{ cinemaId: number, cinemaName: string, screenings: Array<string> }>;
  hideEditMovieForm: boolean = true;
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
      this.id = +params.get('movieId');
    })
    this.movie = this.movieService.getMovie(this.id);
    this.imagePath = createImagePath(this.movie.image);
    this.screeningsByCinema = this.getScreeningsByCinema();
  }

  getScreeningsByCinema(): Array<{ cinemaId: number, cinemaName: string, screenings: Array<string> }> {
    const cinemas = this.cinemaService.getCinemas();
    const result = [];
    for (let cinema of cinemas) {
      result.push({
        cinemaId: cinema.id,
        cinemaName: cinema.name,
        screenings: this.screeningService.getScreenings(this.id, cinema.id)
      })
    }
    return result;
  }

  updateScreenings(): void {
    this.screeningsByCinema = this.getScreeningsByCinema();
  }

  deleteMovie(id: number): void {
    this.movieService.deleteMovie(id);
    this.router.navigate(['/movies']);
  }

  deleteScreening(id: number): void {
    this.screeningService.deleteScreening(id);
    this.updateScreenings();
  }

  toggleMovieForm(): void {
    this.hideEditMovieForm = !this.hideEditMovieForm;
  }

  toggleAddScreeningForm(): void {
    this.hideAddScreeningForm = !this.hideAddScreeningForm;
  }

}
