import { Component, OnInit } from '@angular/core';
import { MapGeocoder } from '@angular/google-maps';
import { ActivatedRoute, Router } from '@angular/router';
import { TripDetailsService } from './services/trip-details.service';
import { TripDetails } from 'src/app/models/trip-details.model';

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
    this.tripDetailsService.getTripDetails(this.tripCode).subscribe({
      next: (data) => {
        if (data) {
          this.tripDetails = data;
          console.log(data);
        } else {
          this.router.navigate(['dashboard']);
        }
      },
      error: (error) => {},
    });
  }

  addNoteForTrip() {}

  editNoteForTrip() {}

  addNoteToPlace() {}

  editNoteToPlace() {}

  filterPlace(event: any): void {
    console.log(event);
    // this.geocoder.geocode({
    //   address: event.query
    // }).subscribe(({results}) => {
    //   console.log(results);
    // });
  }
}
