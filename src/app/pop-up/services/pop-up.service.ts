import { Injectable } from '@angular/core';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { AddEditNotesPopUpComponent } from '../components/add-edit-notes-pop-up/add-edit-notes-pop-up.component';
import { AddPlacePopUpComponent } from '../components/add-place-pop-up/add-place-pop-up.component';
import { AddExpensesPopUpComponent } from '../components/add-expenses-pop-up/add-expenses-pop-up.component';
import { ExpensesBreakDownPopUpComponent } from '../components/expenses-break-down-pop-up/expenses-break-down-pop-up.component';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Environment } from 'src/app/environment/api_keys';
import { BudgetResponse } from 'src/app/models/budget-response.model';
import { Operations } from 'src/app/enums/operations.enum';
import { AddEditBudgetPopUpComponent } from '../components/add-edit-budget-pop-up/add-edit-budget-pop-up.component';
import { environment } from 'src/app/environment/environment';
import { Type } from 'src/app/enums/type.enum';

@Injectable({
  providedIn: 'root',
})
export class PopUpService {
  private readonly saveNotesAPI = ``;
  private readonly savePlaceAPI = ``;
  private readonly basicSerpAPI = `https://serpapi.com/search.json?engine=google_maps`;

  ref: DynamicDialogRef | undefined;

  constructor(private http: HttpClient, public dialogService: DialogService) {}

  showAddEditNotesPopUp(popUpData: any) {
    this.ref = this.dialogService.open(AddEditNotesPopUpComponent, {
      header: `${popUpData.operationType} Notes in ${popUpData.type}`,
      data: {
        ...popUpData,
      },
    });
  }

  showAddPlacePopUp(popUpData: any) {
    this.ref = this.dialogService.open(AddPlacePopUpComponent, {
      header: `Add Place in ${popUpData.type}`,
      data: {
        ...popUpData,
      },
    });
  }

  showAddEditBudgetPopUp(popUpData: any) {
    this.ref = this.dialogService.open(AddEditBudgetPopUpComponent, {
      header: `${popUpData.operationType} Budget`,
      data: {
        ...popUpData,
      },
    });
  }

  showAddExpensesPopUp(popUpData: any) {
    this.ref = this.dialogService.open(AddExpensesPopUpComponent, {
      header: 'Add Expenses',
      data: {
        ...popUpData,
      },
    });
  }

  showExpensesBreakDownPopUp() {
    this.ref = this.dialogService.open(ExpensesBreakDownPopUpComponent, {
      header: 'Expenses break down',
    });
  }

  onClose() {
    this.ref?.close();
  }

  addNotes(type: string, data: any) {
    let notesApi = '';
    if (type === Type.TripNotes) {
      notesApi = environment.endpoints.tripNotes;
    } else if (type === Type.ItineraryNotes) {
      notesApi = environment.endpoints.itineraryNotes;
    } else if (type === Type.TripPlaceNotes) {
      notesApi = environment.endpoints.tripPlaceNotes;
    } else if (type === Type.ItineraryPlaceNotes) {
      notesApi = environment.endpoints.itineraryPlaceNotes;
    }
    notesApi = `${notesApi}/add`;
    this.http.post(notesApi, data).subscribe({
      next: (_) => {
        this.onClose();
      },
      error: (error) => {},
    });
  }

  editNotes(type: string, data: any) {
    let notesApi = '';
    if (type === Type.TripNotes) {
      notesApi = environment.endpoints.tripNotes;
    } else if (type === Type.ItineraryNotes) {
      notesApi = environment.endpoints.itineraryNotes;
    } else if (type === Type.TripPlaceNotes) {
      notesApi = environment.endpoints.tripPlaceNotes;
    } else if (type === Type.ItineraryPlaceNotes) {
      notesApi = environment.endpoints.itineraryPlaceNotes;
    }
    notesApi = `${notesApi}/${data.id}`;
    this.http.post(this.saveNotesAPI, data).subscribe({
      next: (_) => {
        this.onClose();
      },
      error: (error) => {},
    });
  }

  savePlace(data: any) {
    this.http.post(this.savePlaceAPI, data).subscribe({
      next: (_) => {
        this.onClose();
      },
      error: (error) => {},
    });
  }

  getPlaceDetails(place: string) {
    return this.http
      .get(`${this.basicSerpAPI}&q=${place}&key=${Environment.SERP_API_KEY}`)
      .pipe(
        (res) => res,
        catchError((_) => [])
      );
  }

  saveBudget(data: BudgetResponse) {
    this.http.post('', data).subscribe({
      next: (_) => {
        this.onClose();
      },
      error: (error) => {},
    });
  }
}
