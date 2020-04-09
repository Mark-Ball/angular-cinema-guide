import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../models/Movie';

@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.scss']
})
export class AddMovieFormComponent implements OnInit {
  movie = new Movie(99, '', '', '');

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('submitted');
  }

  get diagnostic() { return JSON.stringify(this.movie); }

}
