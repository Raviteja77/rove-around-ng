import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Type } from 'src/app/enums/type.enum';
import { UserAuthenticationService } from 'src/app/features/user-authentication/services/user-authentication.service';
import { PopUpData } from 'src/app/models/pop-up-data.model';
import { SerpGoogleLocation } from 'src/app/models/serp-google-location.model';
import {
  ItineraryLocation,
  TripLocation,
} from 'src/app/models/trip-details.model';
import { Iuser } from 'src/app/models/user.model';
import { PopUpService } from '../../services/pop-up.service';

@Component({
  selector: 'app-add-place-pop-up',
  templateUrl: './add-place-pop-up.component.html',
  styleUrls: ['./add-place-pop-up.component.scss'],
})
export class AddPlacePopUpComponent implements OnInit {
  place: any;
  data!: PopUpData;
  user!: Iuser;

  constructor(
    private dynamicDialogConfig: DynamicDialogConfig,
    private popUpService: PopUpService,
    private authService: UserAuthenticationService
  ) {
    this.data = this.dynamicDialogConfig.data;
  }

  ngOnInit(): void {
    this.user = this.authService.getStoredUserStateManagement().user;
  }

  onSubmit() {
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
            response?.place_results?.description && Object.keys(response?.place_results?.description).length > 0
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
        let placeResponse;
        if (this.data.type === Type.Trip) {
          placeResponse = {
            userId: this.user.userId,
            googleResponse: JSON.stringify(formattedRes),
            position: 0,
            tripId: this.data.typeId,
            status: true,
          } as TripLocation;
        } else if (this.data.type === Type.Itinerary) {
          placeResponse = {
            userId: this.user.userId,
            googleResponse: JSON.stringify(formattedRes),
            position: 0,
            itineraryId: this.data.typeId,
            status: true,
          } as ItineraryLocation;
        }
        this.popUpService.savePlace(this.data.type, placeResponse);
      });
  }

  onClose() {
    this.popUpService.onClose();
  }

  handlePlaceSelection(event: any): void {
    this.place = event;
  }
}
