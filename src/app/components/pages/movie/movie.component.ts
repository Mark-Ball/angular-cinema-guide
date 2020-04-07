import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movies } from '../../../model/data';
import { createImagePath } from '../../../services/utils';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: any;
  searchString: string;
  imagePath: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // extract search string from params
    this.route.paramMap.subscribe(params => {
      this.searchString = params.get('movieId');
    })

    // iterate through movies, find the movie corresponding to the search string
    for (let element of movies) {
      if (element.name === this.searchString) {
        this.movie = element;
      }
    }

    this.imagePath = createImagePath(this.movie.image);
  }

}
