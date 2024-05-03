import { Component, OnInit } from '@angular/core';
import { MapGeocoder } from '@angular/google-maps';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Operations } from 'src/app/enums/operations.enum';
import { Type } from 'src/app/enums/type.enum';
import { PopUpData } from 'src/app/models/pop-up-data.model';
import { Itinerary, TripDetails } from 'src/app/models/trip-details.model';
import { PopUpService } from 'src/app/pop-up/services/pop-up.service';
import { TripDetailsService } from './services/trip-details.service';

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
  public coordinates: any[] = [];

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
      this.tripDetailsService.getTripDetails(this.tripCode);
    });
    this.getTripDetails();
  }

  getCoordinatesFromGoogleResponse(googleResponse: string) {
    const parsedGoogleResponse = JSON.parse(googleResponse);
    this.coordinates = [
      parsedGoogleResponse.place_results.gps_coordinates.latitude,
      parsedGoogleResponse.place_results.gps_coordinates.longitude,
    ];
  }

  getTripDetails() {
    this.tripDetailsService.tripDetails$.subscribe((data) => {
      if (data) {
        data.tripLocations.forEach((tripLocation) => {
          tripLocation.serpGoogleResponse = JSON.parse(
            tripLocation.googleResponse
          );
        });
        this.itineraryTabMenus = [];
        this.selectedItineraryTab = [];
        this.tripDetails = data;
        this.isTripEndInSameYear =
          new Date(this.tripDetails.trip.startDate).getFullYear() ===
          new Date(this.tripDetails.trip.endDate).getFullYear();
        this.tripDetails.itineraries.forEach(
          (itinerary: Itinerary, index: number) => {
            itinerary.itineraryLocations.forEach((itineraryLocation) => {
              itineraryLocation.serpGoogleResponse = JSON.parse(
                itineraryLocation.googleResponse
              );
            });
            this.itineraryTabMenus.push([
              { label: 'Places', icon: 'pi pi-map-marker' },
              { label: 'Notes', icon: 'pi pi-clipboard' },
            ]);
            this.selectedItineraryTab.push(this.itineraryTabMenus[index][0]);
          }
        );
        console.log(data);
      } else {
        this.router.navigate(['dashboard']);
      }
    });
  }

  getDate(date: any) {
    return new Date(date).toDateString();
  }

  addNotes(type: string, typeID: number) {
    const popUpData = {
      type: type,
      typeId: typeID,
      operationType: Operations.Add,
      tripCode: this.tripCode,
    } as PopUpData;
    this.popUpService.showAddEditNotesPopUp(popUpData);
  }

  editNote(type: string, typeID: number, notes: any) {
    const popUpData = {
      type: type,
      typeId: typeID,
      operationType: this.operations.Edit,
      tripCode: this.tripCode,
    } as PopUpData;
    if (type === Type.Trip) {
      popUpData.tripNotes = notes;
    } else if (type == Type.Itinerary) {
      popUpData.ItineraryNotes = notes;
    }
    this.popUpService.showAddEditNotesPopUp(popUpData);
  }

  addPlace(type: string, typeID: number) {
    const popUpData = {
      type: type,
      typeId: typeID,
      tripCode: this.tripCode,
    } as PopUpData;
    this.popUpService.showAddPlacePopUp(popUpData);
  }

  deleteNote(type: string, id: number) {
    this.tripDetailsService.deleteNotes(type, id, this.tripCode);
  }

  deletePlace(type: string, id: number) {
    this.tripDetailsService.deletePlace(type, id, this.tripCode);
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
    const popUpData = {};
    this.popUpService.showAddEditBudgetPopUp(popUpData);
  }

  addExpenses() {
    const popUpData = {
      operationType: this.operations.Add,
    };
    this.popUpService.showAddExpensesPopUp(popUpData);
  }

  viewBudgetBreakDown() {}
}
