import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movies } from '../../../model/data';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: object;
  searchString: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // transforms search string, e.g. the-dark-knight to The Dark Knight
      this.searchString = params
        .get('movieId')
        .split('-')
        .map(i => i[0].toUpperCase() + i.substr(1))
        .join(' ');
      console.log(this.searchString);
    })
  }

}
