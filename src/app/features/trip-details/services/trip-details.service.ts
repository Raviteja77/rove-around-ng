import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TripDetailsService {
  private readonly getTripDetailsAPI = ``;
  private readonly deleteNotesAPI = ``;
  private readonly deletePlaceAPI = ``;

  constructor(private http: HttpClient) {}

  getTripDetails(code: string) {
    const tripsDetailsString = localStorage.getItem('tripDetails');
    let mockTripsDetails: any[] = [];
    if (tripsDetailsString) {
      mockTripsDetails = JSON.parse(tripsDetailsString);
    }
    const tripDetails = mockTripsDetails.find((trip) => trip.tripCode === code);
    if (tripDetails) {
      return of(tripDetails);
    }
    return of(null);
  }

  deleteNotes(id: number) {
    this.http.post(this.deleteNotesAPI, { id }).subscribe({
      next: () => {},
      error: (error) => {},
    });
  }

  deletePlace(id: number) {
    this.http.post(this.deletePlaceAPI, { id }).subscribe({
      next: () => {},
      error: (error) => {},
    });
  }

  addPlace() {}
}
