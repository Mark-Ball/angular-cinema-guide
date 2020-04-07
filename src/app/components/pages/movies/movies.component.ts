import { Component, OnInit } from '@angular/core';
import { movies } from '../../../model/data';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
		this.movies = movies;
  }

}
