import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Type } from 'src/app/enums/type.enum';
import { environment } from 'src/app/environment/environment';
import { TripDetails } from 'src/app/models/trip-details.model';

@Injectable({
  providedIn: 'root',
})
export class TripDetailsService {
  private readonly getTripDetailsAPI = ``;
  private readonly deleteNotesAPI = ``;
  private readonly deletePlaceAPI = ``;

  constructor(private http: HttpClient) {}

  getTripDetails(code: string) {
    return this.http.get<TripDetails>(`${environment.endpoints.trip}/${code}`);
  }

  deleteNotes(type: string, id: number) {
    let deleteApi = '';
    if (type === Type.TripNotes) {
      deleteApi = environment.endpoints.tripNotes;
    } else if (type === Type.ItineraryNotes) {
      deleteApi = environment.endpoints.itineraryNotes;
    } else if (type === Type.TripPlaceNotes) {
      deleteApi = environment.endpoints.tripPlaceNotes;
    } else if (type === Type.ItineraryPlaceNotes) {
      deleteApi = environment.endpoints.itineraryPlaceNotes;
    }
    deleteApi = `${deleteApi}/${id}`;
    this.http.delete(deleteApi).subscribe({
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
