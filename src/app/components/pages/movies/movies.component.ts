import { Component, OnInit } from '@angular/core';
import { movies } from '../../../models/data';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
	movies = [Object];

  constructor() { }

  ngOnInit(): void {
		this.movies = movies;
  }

}
