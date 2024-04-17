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
    const mockTrips: Trip[] = [
      {
        id: 1,
        destination: 'Paris',
        startDate: '2024-04-10',
        endDate: '2024-04-15',
        budget: 2000,
        destinationImage: 'paris.jpg',
        numberOfPlaces: 5,
        numberOfUsers: 3,
        tripStatus: '',
        numberOfDays: 0,
      },
      {
        id: 2,
        destination: 'Tokyo',
        startDate: '2024-05-15',
        endDate: '2024-05-25',
        budget: 3000,
        destinationImage: 'tokyo.jpg',
        numberOfPlaces: 8,
        numberOfUsers: 4,
        tripStatus: '',
        numberOfDays: 0,
      },
      {
        id: 3,
        destination: 'New York',
        startDate: '2024-06-20',
        endDate: '2024-06-30',
        budget: 2500,
        destinationImage: 'newyork.jpg',
        numberOfPlaces: 6,
        numberOfUsers: 5,
        tripStatus: '',
        numberOfDays: 0,
      },
    ];
    return of(mockTrips);
    // return this.http.get<Trip[]>(this.tripsAPI);
  }
}
