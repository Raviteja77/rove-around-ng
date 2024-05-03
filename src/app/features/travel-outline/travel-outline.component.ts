import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripResponse } from 'src/app/models/trip-response.model';
import { PopUpService } from 'src/app/pop-up/services/pop-up.service';
import { TravelOutlineService } from './services/travel-outline.service';

@Component({
  selector: 'app-travel-outline',
  templateUrl: './travel-outline.component.html',
  styleUrls: ['./travel-outline.component.scss'],
})
export class TravelOutlineComponent implements OnInit{
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
      .subscribe((response) => {
        this.addTrip(JSON.stringify(response), JSON.stringify(this.place));
      });
  }

  startRoving() {}

  addTrip(googleResponse: string, destination: string) {
    let user = sessionStorage.getItem('userStateManagement');
    if(user) {
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
