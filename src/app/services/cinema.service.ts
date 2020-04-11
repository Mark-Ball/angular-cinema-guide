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
      image: 'placeholder.png', // TODO: add image upload
      location: cinema.location,
      openingHours: cinema.openingHours
    })
  }
}
