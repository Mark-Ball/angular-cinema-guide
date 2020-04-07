import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movies } from '../../../model/data';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: any;
  searchString: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.searchString = params.get('movieId');
    })

    // iterate through movies, find the movie corresponding to the search string
    for (let element of movies) {
      if (element.name === this.searchString) {
        this.movie = element;
      }
    }
  }

}
