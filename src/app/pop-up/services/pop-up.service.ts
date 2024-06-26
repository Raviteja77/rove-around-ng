import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { catchError } from 'rxjs';
import { Type } from 'src/app/enums/type.enum';
import { environment } from 'src/app/environment/environment';
import { TripDetailsService } from 'src/app/features/trip-details/services/trip-details.service';
import { PopUpData } from 'src/app/models/pop-up-data.model';
import { Budget, Expense } from 'src/app/models/trip-details.model';
import { AddEditBudgetPopUpComponent } from '../components/add-edit-budget-pop-up/add-edit-budget-pop-up.component';
import { AddEditNotesPopUpComponent } from '../components/add-edit-notes-pop-up/add-edit-notes-pop-up.component';
import { AddExpensesPopUpComponent } from '../components/add-expenses-pop-up/add-expenses-pop-up.component';
import { AddPlacePopUpComponent } from '../components/add-place-pop-up/add-place-pop-up.component';
import { ExpensesBreakDownPopUpComponent } from '../components/expenses-break-down-pop-up/expenses-break-down-pop-up.component';
import { Environment } from 'src/app/environment/api_keys';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class PopUpService {
  private readonly savePlaceAPI = ``;
  private readonly basicSerpAPI = `https://serpapi.com/search.json?engine=google_maps`;
  popUpData!: PopUpData;

  ref: DynamicDialogRef | undefined;

  constructor(
    private http: HttpClient,
    public dialogService: DialogService,
    private tripDetailsService: TripDetailsService,
    private messageService: MessageService
  ) {}

  showAddEditNotesPopUp(popUpData: any) {
    this.popUpData = popUpData;
    this.ref = this.dialogService.open(AddEditNotesPopUpComponent, {
      header: `${popUpData.operationType} Notes in ${popUpData.type}`,
      data: {
        ...popUpData,
      },
    });
  }

  showAddPlacePopUp(popUpData: any) {
    this.popUpData = popUpData;
    this.ref = this.dialogService.open(AddPlacePopUpComponent, {
      header: `Add Place in ${popUpData.type}`,
      data: {
        ...popUpData,
      },
    });
  }

  showAddEditBudgetPopUp(popUpData: any) {
    this.popUpData = popUpData;
    this.ref = this.dialogService.open(AddEditBudgetPopUpComponent, {
      header: `${popUpData.operationType} Budget`,
      data: {
        ...popUpData,
      },
    });
  }

  showAddExpensesPopUp(popUpData: any) {
    this.popUpData = popUpData;
    this.ref = this.dialogService.open(AddExpensesPopUpComponent, {
      header: `${popUpData.operationType} Expenses`,
      data: {
        ...popUpData,
      },
      height: '520px',
      width: '350px'
    });
  }

  showExpensesBreakDownPopUp(popUpData: PopUpData) {
    this.ref = this.dialogService.open(ExpensesBreakDownPopUpComponent, {
      header: 'Expenses break down',
      data: {
        ...popUpData,
      },
    });
  }

  onClose() {
    this.ref?.close();
  }

  addNotes(type: string, data: any) {
    let notesApi = '';
    if (type === Type.Trip) {
      notesApi = environment.endpoints.tripNotes;
    } else if (type === Type.Itinerary) {
      notesApi = environment.endpoints.itineraryNotes;
    }
    notesApi = `${notesApi}/add`;
    this.http.post(notesApi, data).subscribe({
      next: (_) => {
        this.tripDetailsService.getTripDetails(this.popUpData.tripCode);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Notes added Successfully' });
        this.onClose();
      },
      error: (error) => {},
    });
  }

  editNotes(type: string, data: any) {
    let notesApi = '';
    if (type === Type.Trip) {
      notesApi = environment.endpoints.tripNotes;
    } else if (type === Type.Itinerary) {
      notesApi = environment.endpoints.itineraryNotes;
    }
    notesApi = `${notesApi}/${data.id}`;
    this.http.put(notesApi, data).subscribe({
      next: (_) => {
        this.tripDetailsService.getTripDetails(this.popUpData.tripCode);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Notes updated Successfully' });
        this.onClose();
      },
      error: (error) => {},
    });
  }

  savePlace(type: string, data: any) {
    let placeApi = '';
    if (type === Type.Trip) {
      placeApi = environment.endpoints.tripPlace;
    } else if (type === Type.Itinerary) {
      placeApi = environment.endpoints.itineraryPlace;
    }
    this.http.post(`${placeApi}/add`, data).subscribe({
      next: (_) => {
        this.tripDetailsService.getTripDetails(this.popUpData.tripCode);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Place added Successfully' });
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
    // return this.http.get('assets/mock-data/location-data.json').pipe(
    //   (res) => res,
    //   catchError((_) => [])
    // );
  }

  saveBudget(data: Budget) {
    this.http
      .put(`${environment.endpoints.budgetApi}/${data.id}`, data)
      .subscribe({
        next: (_) => {
          this.tripDetailsService.getTripDetails(this.popUpData.tripCode);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Budget updated Successfully' });
          this.onClose();
        },
        error: (error) => {},
      });
  }

  addExpense(data: Expense) {
    this.http.post(`${environment.endpoints.expenseApi}/add`, data).subscribe({
      next: (_) => {
        this.tripDetailsService.getTripDetails(this.popUpData.tripCode);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Expense added Successfully' });
        this.onClose();
      },
      error: (error) => {},
    });
  }

  editExpense(data: Expense) {
    this.http
      .put(`${environment.endpoints.expenseApi}/${data.id}`, data)
      .subscribe({
        next: (_) => {
          this.tripDetailsService.getTripDetails(this.popUpData.tripCode);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Expense updated Successfully' });
          this.onClose();
        },
        error: (error) => {},
      });
  }
}
