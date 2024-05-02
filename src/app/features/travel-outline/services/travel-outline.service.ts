import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environment/environment';
import { TripResponse } from 'src/app/models/trip-response.model';

@Injectable({
  providedIn: 'root',
})
export class TravelOutlineService {
  private readonly addTripAPI = ``;

  constructor(private http: HttpClient) {}

  addTrip(tripResponse: TripResponse) {
    return this.http.post(`${environment.endpoints.trip}/add`, tripResponse);
  }

  getTrip(tripId: number) {
    return this.http.get(environment.endpoints.trip + tripId);
  }
}
