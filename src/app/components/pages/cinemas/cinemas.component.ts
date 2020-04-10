import { Component, OnInit } from '@angular/core';
import { Cinema } from '../../../Cinema';
import { CinemaService } from '../../../services/cinema.service';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.scss']
})
export class CinemasComponent implements OnInit {
  cinemas: Array<Cinema>;

  constructor(private cinemaService: CinemaService) { }

  ngOnInit(): void {
    this.cinemas = this.cinemaService.getCinemas();
  }

}
