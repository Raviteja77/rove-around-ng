import { Component, OnInit } from '@angular/core';
import { MapGeocoder } from '@angular/google-maps';
import { ActivatedRoute, Router } from '@angular/router';
import { TripDetailsService } from './services/trip-details.service';
import { TripDetails } from 'src/app/models/trip-details.model';
import { MenuItem } from 'primeng/api';

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

  constructor(
    private geocoder: MapGeocoder,
    private route: ActivatedRoute,
    private router: Router,
    private tripDetailsService: TripDetailsService
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

  addNote() {}

  editNote() {}

  filterPlace(event: any): void {
    console.log(event);
    // this.geocoder.geocode({
    //   address: event.query
    // }).subscribe(({results}) => {
    //   console.log(results);
    // });
  }

  onActiveItineraryTabChange(event: any, index: number) {
    console.log(event);
    this.selectedItineraryTab[index] = event;
  }
}
