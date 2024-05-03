import { Component, OnInit } from '@angular/core';
import { MapGeocoder } from '@angular/google-maps';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Operations } from 'src/app/enums/operations.enum';
import { Type } from 'src/app/enums/type.enum';
import { Markers } from 'src/app/models/markers.model';
import { PopUpData } from 'src/app/models/pop-up-data.model';
import {
  Budget,
  Itinerary,
  TripDetails,
} from 'src/app/models/trip-details.model';
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
  public markers: Markers[][] = [];
  public googleResponse: any = null;
  public destination: any = null;

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

  getTripDetails() {
    this.tripDetailsService.tripDetails$.subscribe((data) => {
      if (data) {
        this.markers = [];
        let tempLocationMarkers: Markers[] = [];
        data.tripLocations?.forEach((tripLocation) => {
          tripLocation.serpGoogleResponse = JSON.parse(
            tripLocation.googleResponse
          );
          const tempLocationMarker = this.locationMarkers(tripLocation, 'trip');
          if (tempLocationMarker.title != '') {
            tempLocationMarkers.push(tempLocationMarker);
          }
        });
        if (tempLocationMarkers.length > 0) {
          this.markers.push(tempLocationMarkers);
        }
        this.itineraryTabMenus = [];
        this.selectedItineraryTab = [];
        this.tripDetails = data;
        this.destination = JSON.parse(this.tripDetails?.trip?.destination);
        this.tripDetails.trip.destinationLongName =
          this.destination.address_components[0].long_name;
        this.googleResponse = JSON.parse(this.tripDetails.trip.googleResponse);
        this.isTripEndInSameYear =
          new Date(this.tripDetails.trip.startDate).getFullYear() ===
          new Date(this.tripDetails.trip.endDate).getFullYear();
        tempLocationMarkers = [];
        this.tripDetails.itineraries?.forEach(
          (itinerary: Itinerary, index: number) => {
            itinerary.itineraryLocations.forEach((itineraryLocation) => {
              itineraryLocation.serpGoogleResponse = JSON.parse(
                itineraryLocation.googleResponse
              );
              const tempLocationMarker = this.locationMarkers(
                itineraryLocation,
                'itinerary'
              );
              if (tempLocationMarker.title != '') {
                tempLocationMarkers.push(tempLocationMarker);
              }
            });
            this.itineraryTabMenus.push([
              { label: 'Places', icon: 'pi pi-map-marker' },
              { label: 'Notes', icon: 'pi pi-clipboard' },
            ]);
            this.selectedItineraryTab.push(this.itineraryTabMenus[index][0]);
          }
        );
        if (tempLocationMarkers.length > 0) {
          this.markers.push(tempLocationMarkers);
        }
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

  filterPlace(event: any): void {}

  onActiveItineraryTabChange(event: any, index: number) {
    this.selectedItineraryTab[index] = event;
  }

  addBudget() {}

  editBudget(budget: Budget) {
    const popUpData = {
      operationType: budget.amount === 0 ? Operations.Add : Operations.Edit,
      budget: budget,
      tripCode: this.tripCode,
    } as PopUpData;
    this.popUpService.showAddEditBudgetPopUp(popUpData);
  }

  addExpenses() {
    const popUpData = {
      operationType: this.operations.Add,
    };
    this.popUpService.showAddExpensesPopUp(popUpData);
  }

  viewBudgetBreakDown() {}

  locationMarkers(data: any, type: string) {
    const marker: Markers = {
      lat:
        data?.serpGoogleResponse?.place_results?.gps_coordinates?.latitude || 0,
      lng:
        data?.serpGoogleResponse?.place_results?.gps_coordinates?.longitude ||
        0,
      title: data?.serpGoogleResponse?.place_results?.title || '',
      type: type,
    };
    return marker;
  }
}
