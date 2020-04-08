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
    // if a movieId is provided, filter based on movieId
    if (movId) {
      return this.screenings.filter(screening => screening.movieId === movId);
    }
    // if a cinemaId is provided, filter based on cinemaId
    return this.screenings.filter(screening => screening.cinemaId === cinId);
    
  }
}
