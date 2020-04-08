import { Component, OnInit, Input } from '@angular/core';
import { createImagePath } from '../../services/utils';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {
  @Input() item: any;
  @Input() type: string;
  imagePath: string;
  linkName: string;

  constructor() { }

  ngOnInit(): void {
    this.imagePath = createImagePath(this.item.image);
    this.linkName = `/${this.type}s/${this.item.id}`;
  }

}
