import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../../models/Movie';
import { MovieService } from '../../../services/movie.service';
import { movies } from '../../../models/data';
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

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    // extract id from params
    this.route.paramMap.subscribe(params => {
      this.id = parseInt(params.get('movieId'));
    })
    // get movie based on id
    this.movie = this.movieService.getMovie(this.id);
    this.imagePath = createImagePath(this.movie.image);
  }

}
