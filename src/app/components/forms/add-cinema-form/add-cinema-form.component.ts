import { Component, OnInit } from '@angular/core';
import { Cinema } from '../../../models/Cinema';
import { CinemaService } from '../../../services/cinema.service';

@Component({
  selector: 'app-add-cinema-form',
  templateUrl: './add-cinema-form.component.html',
  styleUrls: ['./add-cinema-form.component.scss']
})
export class AddCinemaFormComponent implements OnInit {
  cinema = new Cinema(99, '', '', '', '');

  constructor(private cinemaService: CinemaService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.cinemaService.createCinema(this.cinema);
  }

}
