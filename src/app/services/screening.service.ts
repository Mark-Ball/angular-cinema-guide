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
      screening.movieId === movId && screening.cinemaId == cinId
    ))
  }
}
