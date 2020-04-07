import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {
  @Input() movie: object;

  constructor() { }

  ngOnInit(): void {
    console.log(this.movie);
  }

}
