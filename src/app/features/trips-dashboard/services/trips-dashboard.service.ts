import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environment/environment';
import { Trip } from 'src/app/models/trip.model';
import { UserAuthenticationService } from '../../user-authentication/services/user-authentication.service';

@Injectable({
  providedIn: 'root',
})
export class TripsDashboardService {
  private readonly tripsAPI = `${environment.endpoints.trip}/all`;

  constructor(
    private http: HttpClient,
    private authService: UserAuthenticationService
  ) {}

  getTrips() {
    const user = this.authService.getStoredUserStateManagement()?.user;
    return this.http.get<Trip[]>(`${this.tripsAPI}/${user.userId}`);
  }

  deleteTrip(id: number) {
    return this.http.post(`${environment.endpoints.trip}/${id}`, {});
  }
}
