import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trip } from 'src/app/models/trip.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TripsDashboardService {
  private readonly tripsAPI = '';

  constructor(private http: HttpClient) {}

  getTrips() {
    const trips = localStorage.getItem('trips');
    if (trips) {
      const mockTrips: Trip[] = JSON.parse(trips);
      return of(mockTrips);
    }
    return of([]);
    // return this.http.get<Trip[]>(this.tripsAPI);
  }
}
