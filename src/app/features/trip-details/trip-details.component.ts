import { Component, OnInit } from '@angular/core';
import { MapGeocoder } from '@angular/google-maps';
import { ActivatedRoute, Router } from '@angular/router';
import { TripDetailsService } from './services/trip-details.service';
import { TripDetails } from 'src/app/models/trip-details.model';
import { MenuItem } from 'primeng/api';
import { PopUpService } from 'src/app/pop-up/services/pop-up.service';
import { Operations } from 'src/app/enums/operations.enum';
import { Type } from 'src/app/enums/type.enum';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss'],
})
export class TripDetailsComponent implements OnInit {
  tripCode: string = '';
  notes: string = '';
  places: string = '';
  filteredPlaces: any = [];
  notesInput: any = [];
  tripDetails!: TripDetails;
  isTripEndInSameYear: boolean = false;

  itineraryTabMenus: MenuItem[][] = [];
  selectedItineraryTab: MenuItem[] = [];

  operations = Operations;
  type = Type;

  constructor(
    private geocoder: MapGeocoder,
    private route: ActivatedRoute,
    private router: Router,
    private tripDetailsService: TripDetailsService,
    private popUpService: PopUpService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.tripCode = params['code'];
      this.getTripDetails();
    });
  }

  getTripDetails() {
    this.itineraryTabMenus = [];
    this.selectedItineraryTab = [];
    this.tripDetailsService.getTripDetails(this.tripCode).subscribe({
      next: (data) => {
        if (data) {
          this.tripDetails = data;
          this.isTripEndInSameYear =
            new Date(this.tripDetails.startDate).getFullYear() ===
            new Date(this.tripDetails.endDate).getFullYear();
          this.tripDetails.itinerary.forEach((itinerary, index) => {
            this.itineraryTabMenus.push([
              { label: 'Places', icon: 'pi pi-map-marker' },
              { label: 'Notes', icon: 'pi pi-clipboard' },
            ]);
            this.selectedItineraryTab.push(this.itineraryTabMenus[index][0]);
          });
          console.log(data);
        } else {
          this.router.navigate(['dashboard']);
        }
      },
      error: (error) => {},
    });
  }

  addNote(type: string, typeID: number) {
    const popUpData = {
      type,
      typeID,
      operationType: this.operations.Add,
    };
    this.popUpService.showAddEditNotesPopUp(popUpData);
  }

  editNote(type: string, typeID: number, notes: any) {
    const popUpData = {
      type,
      typeID,
      operationType: this.operations.Edit,
      notes: notes.notes,
      id: notes.id,
    };
    this.popUpService.showAddEditNotesPopUp(popUpData);
  }

  addPlace(type: string, typeID: number) {
    const popUpData = {
      type,
      typeID,
    };
    this.popUpService.showAddPlacePopUp(popUpData);
  }

  deleteNote(id: number) {
    this.tripDetailsService.deleteNotes(id);
  }

  filterPlace(event: any): void {
    console.log(event);
    // this.geocoder.geocode({
    //   address: event.query
    // }).subscribe(({results}) => {
    //   console.log(results);
    // });
  }

  onActiveItineraryTabChange(event: any, index: number) {
    this.selectedItineraryTab[index] = event;
  }

  addBudget() {}

  editBudget() {
    const popUpData = {
      id: this.tripDetails.budget.id,
      budget: this.tripDetails.budget.budgetAllocated,
      tripID: this.tripDetails.id,
      operationType:
        this.tripDetails.budget.budgetAllocated === 0
          ? this.operations.Add
          : this.operations.Edit,
    };
    this.popUpService.showAddEditBudgetPopUp(popUpData);
  }

  addExpenses() {}

  viewBudgetBreakDown() {}
}
