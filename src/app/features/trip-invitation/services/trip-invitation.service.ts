import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class TripInvitationService {
  constructor(private http: HttpClient) {}

  addTraveler(response: any) {
    return this.http.post(`${environment.endpoints.travelerApi}/add`, response);
  }
}
