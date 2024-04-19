import { Component } from '@angular/core';
import { PopUpService } from 'src/app/pop-up/services/pop-up.service';
import { TravelOutlineService } from './services/travel-outline.service';
import { TripResponse } from 'src/app/models/trip-response.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travel-outline',
  templateUrl: './travel-outline.component.html',
  styleUrls: ['./travel-outline.component.scss'],
})
export class TravelOutlineComponent {
  rangeDates: any[] = [];
  minDate: any;
  place: any;

  constructor(
    private popUpService: PopUpService,
    private travelOutlineService: TravelOutlineService,
    private router: Router
  ) {}

  search(event: any) {
    console.log(event);
  }

  handlePlaceSelection(event: any): void {
    this.place = event;
  }

  hi() {
    console.log(this.rangeDates);
  }

  startRoving() {
    this.popUpService
      .getPlaceDetails(this.place.long_name)
      .subscribe((response) => {
        this.addTrip(JSON.stringify(response));
      });
  }

  addTrip(googleResponse: string) {
    const tripResponse = {
      startDate: this.rangeDates[0],
      endDate: this.rangeDates[1],
      destination: googleResponse,
      googleResponse,
    } as TripResponse;
    this.travelOutlineService.addTrip(tripResponse).subscribe({
      next: (res: any) => {
        this.router.navigate(['trip-details', res?.code]);
      },
      error: (error) => {},
    });
  }
}
