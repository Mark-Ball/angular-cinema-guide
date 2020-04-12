import { Component, OnInit, Input } from '@angular/core';
import { Cinema } from '../../../models/Cinema';
import { CinemaService } from '../../../services/cinema.service';

@Component({
  selector: 'app-add-cinema-form',
  templateUrl: './add-cinema-form.component.html',
  styleUrls: ['./add-cinema-form.component.scss']
})
export class AddCinemaFormComponent implements OnInit {
  @Input() cinema: Cinema;
  newCinema: Cinema;
  cinemaId: number;
  cinemaName: string;
  cinemaLocation: string;
  cinemaOpeningHours: string;

  constructor(private cinemaService: CinemaService) { }

  ngOnInit(): void {
    // if a cinema is passed, take details from that cinema
    if (this.cinema) {
      const { id, name, location, openingHours } = this.cinema;
      this.newCinema = new Cinema(id, name, '', location, openingHours);
    // if no movie is passed, create a blank movie
    } else {
      this.newCinema = new Cinema(null, '', '', '' ,'');
    }
  }

  onSubmit() {
    // update an existing cinema if there was an id
    // create a new cinema if there was no id
    if (this.newCinema.id) {
      this.cinemaService.updateCinema(this.newCinema);
    } else {
      this.cinemaService.createCinema(this.newCinema);
    }
  }

}
