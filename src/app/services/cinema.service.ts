import { Injectable } from '@angular/core';
import { Cinema } from '../models/Cinema';
import { cinemas } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  cinemas: Cinema[] = cinemas;

  constructor() { }

  getCinemas(): Cinema[] {
    return this.cinemas;
  }

  getCinema(id: number): Cinema {
    return this.cinemas.filter(cinema => cinema.id === id)[0];
  }

  createCinema(cinema: Cinema): void {
    this.cinemas.push({
      id: this.getCinemas().length + 1,
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
        return;
      }
    }
  }

}
