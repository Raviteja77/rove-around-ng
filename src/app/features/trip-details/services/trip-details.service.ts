import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { Type } from 'src/app/enums/type.enum';
import { environment } from 'src/app/environment/environment';
import { TripDetails } from 'src/app/models/trip-details.model';

@Injectable({
  providedIn: 'root',
})
export class TripDetailsService {
  private readonly deletePlaceAPI = ``;

  public tripDetails$: BehaviorSubject<TripDetails> =
    new BehaviorSubject<TripDetails>({} as TripDetails);

  constructor(private http: HttpClient, private messageService: MessageService) {}

  getTripDetails(code: string) {
    this.http
      .get<TripDetails>(`${environment.endpoints.trip}/${code}`)
      .subscribe({
        next: (data) => {
          this.tripDetails$.next(data);
        },
        error: (error) => {},
      });
  }

  deleteNotes(type: string, id: number, tripCode: string) {
    let deleteApi = '';
    if (type === Type.Trip) {
      deleteApi = environment.endpoints.tripNotes;
    } else if (type === Type.Itinerary) {
      deleteApi = environment.endpoints.itineraryNotes;
    }
    deleteApi = `${deleteApi}/${id}`;
    this.http.post(deleteApi, {}).subscribe({
      next: () => {
        this.getTripDetails(tripCode);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Notes deleted successfully' });
      },
      error: (error) => {},
    });
  }

  deletePlace(type: string, id: number, tripCode: string) {
    let deleteApi = '';
    if (type === Type.Trip) {
      deleteApi = environment.endpoints.tripPlace;
    } else if (type === Type.Itinerary) {
      deleteApi = environment.endpoints.itineraryPlace;
    }
    deleteApi = `${deleteApi}/${id}`;
    this.http.post(deleteApi, { id }).subscribe({
      next: () => {
        this.getTripDetails(tripCode);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Place deleted successfully' });
      },
      error: (error) => {},
    });
  }

  deleteExpenses(id: number, tripCode: string) {
    this.http
      .post(`${environment.endpoints.expenseApi}/${id}`, { id })
      .subscribe({
        next: () => {
          this.getTripDetails(tripCode);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Expense deleted successfully' });
        },
        error: (error) => {},
      });
  }

  addPlace() {}
}
