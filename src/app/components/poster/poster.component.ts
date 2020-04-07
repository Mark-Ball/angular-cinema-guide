import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {
  @Input() item: any;
  imagePath: string;

  constructor() { }

  ngOnInit(): void {
    this.imagePath = 'assets/images/' + this.item.image;
  }

}
