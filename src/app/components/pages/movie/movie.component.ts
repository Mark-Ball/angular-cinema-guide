import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movies } from '../../../models/data';
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

  deleteTime = (movieName, cinemaName, time) => {
    console.log('deleteTime called:', movieName, cinemaName, time);
    // go through movies array
    // find correct movie
    // find correct cinema
    // delete time

    // for (let element of movies) {
    //   if (element.name == movieName) {
    //     for (let cinemas.)
    //   }
    // }
  }

}
