import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../../models/Movie';
import { movies } from '../../../models/data';
import { createImagePath } from '../../../services/utils';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: Movie;
  id: string;
  imagePath: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // extract id from params
    this.route.paramMap.subscribe(params => {
      this.id = params.get('movieId');
    })

    // iterate through movies, find the movie corresponding to the id
    for (let element of movies) {
      if (element.id == this.id) {
        this.movie = element;
      }
    }

    this.imagePath = createImagePath(this.movie.image);
  }

}
