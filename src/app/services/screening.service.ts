import { Injectable } from '@angular/core';
import { Screening } from '../models/Screening';
import { screenings } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class ScreeningService {
  screenings: Screening[] = screenings;

  constructor() { }

  getScreenings(movId: number, cinId: number): Screening[] {
    // if no movId provided, filter based on cinId
    if (!movId) {
      return this.screenings.filter(screening => screening.cinemaId === cinId);
    }
    // if no cinId provided, filter based on movId
    if (!cinId) {
      return this.screenings.filter(screening => screening.movieId === movId);
    }
    // if both ids provided, filter based on both
    return this.screenings.filter(screening => (
      screening.movieId === movId && screening.cinemaId === cinId
    ))
  }

  createScreening(movId: number, cinId: number, t: string): void {
    // if there are screenings, id is 1 greater than id of last element, else id is 1
    // this handles the case where all screenings have been deleted
    let id;
    if (this.screenings[0]) {
      id = this.screenings[this.screenings.length - 1].id + 1;
    } else {
      id = 1;
    }
    screenings.push({
      id,
      time: t,
      movieId: movId,
      cinemaId: cinId
    })
  }

  deleteScreening(id: number): void {
    for (let i in this.screenings) {
      if (this.screenings[i].id === id) {
        this.screenings.splice(+i, 1);
        return;
      }
    }
  }

}
