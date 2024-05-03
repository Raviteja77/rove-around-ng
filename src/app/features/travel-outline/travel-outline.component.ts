import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerpGoogleLocation } from 'src/app/models/serp-google-location.model';
import { TripResponse } from 'src/app/models/trip-response.model';
import { PopUpService } from 'src/app/pop-up/services/pop-up.service';
import { TravelOutlineService } from './services/travel-outline.service';

@Component({
  selector: 'app-travel-outline',
  templateUrl: './travel-outline.component.html',
  styleUrls: ['./travel-outline.component.scss'],
})
export class TravelOutlineComponent implements OnInit {
  rangeDates: any[] = [];
  minDate: any;
  place: any;

  constructor(
    private popUpService: PopUpService,
    private travelOutlineService: TravelOutlineService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.travelOutlineService.getTrip(352).subscribe(data => {
    //   console.log(data);
    // })
  }

  search(event: any) {}

  handlePlaceSelection(event: any): void {
    this.place = event;
  }

  hi() {
    // this.addTrip("hello world");
    this.popUpService
      .getPlaceDetails(this.place.address_components[0].long_name)
      .subscribe((response: any) => {
        console.log(response);
        const formattedRes: SerpGoogleLocation = {
          place_results: {
            title: response?.place_results?.title,
            thumbnail: response?.place_results?.thumbnail,
            gps_coordinates: response?.place_results?.gps_coordinates,
            description:
              Object.keys(response?.place_results?.description).length > 0
                ? response?.place_results?.description?.snippet
                : response?.place_results?.description,
            address: response?.place_results?.address || '',
            rating: response?.place_results?.rating || 0,
            reviews: response?.place_results?.reviews || 0,
            open_state: response?.place_results?.open || '',
            hours: response?.place_results?.hours || [],
            website: response?.place_results?.website,
          },
        };

        this.addTrip(JSON.stringify(formattedRes), JSON.stringify(this.place));
      });
  }

  startRoving() {}

  addTrip(googleResponse: string, destination: string) {
    let user = sessionStorage.getItem('userStateManagement');
    if (user) {
      const parsedUser = JSON.parse(user);
      const tripResponse = {
        startDate: this.rangeDates[0],
        endDate: this.rangeDates[1],
        destination: destination,
        userId: parsedUser.user.userId,
        googleResponse,
      } as TripResponse;
      this.travelOutlineService.addTrip(tripResponse).subscribe({
        next: (res: any) => {
          this.router.navigate([`trip-details/${res?.tripCode}`]);
        },
        error: (error) => {},
      });
    }
  }
}
