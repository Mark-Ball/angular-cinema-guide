import { Injectable } from '@angular/core';
import { Cinema } from '../models/Cinema';
import { cinemas } from '../models/data';
import { ScreeningService } from './screening.service';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  cinemas: Cinema[] = cinemas;

  constructor(private screeningService: ScreeningService) { }

  getCinemas(): Cinema[] {
    return this.cinemas;
  }

  getCinema(id: number): Cinema {
    return this.cinemas.filter(cinema => cinema.id === id)[0];
  }

  createCinema(cinema: Cinema): void {
    // if there are cinemas, id is 1 greater than id of last element, else id is 1
    // this handles the case where all cinemas have been deleted
    let id;
    if (this.cinemas[0]) {
      id = this.cinemas[this.cinemas.length - 1].id + 1;
    } else {
      id = 1;
    }
    this.cinemas.push({
      id,
      name: cinema.name,
      image: 'placeholder.png',
      location: cinema.location,
      openingHours: cinema.openingHours
    })
  }

    updateCinema(cinema: Cinema): void {
    for (let item of this.cinemas) {
      if (item.id === cinema.id) {
        item.name = cinema.name;
        item.location = cinema.location;
        item.openingHours = cinema.openingHours;
        return;
      }
    }
  }

  deleteCinema(id: number) {
    for (let i in this.cinemas) {
      if (this.cinemas[i].id === id) {
        this.cinemas.splice(+i, 1);
        break;
      }
    }
    // delete orphan records
    for (let screening of this.screeningService.getScreenings(null, id)) {
      this.screeningService.deleteScreening(screening.id);
    }
  }

}
