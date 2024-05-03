import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Type } from 'src/app/enums/type.enum';
import { UserAuthenticationService } from 'src/app/features/user-authentication/services/user-authentication.service';
import { PopUpData } from 'src/app/models/pop-up-data.model';
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
      .getPlaceDetails(this.place.long_name)
      .subscribe((response) => {
        console.log(response);
        let placeResponse;
        if (this.data.type === Type.Trip) {
          placeResponse = {
            userId: this.user.userId,
            googleResponse: JSON.stringify(response),
            position: 0,
            tripId: this.data.typeId,
            status: true,
          } as TripLocation;
        } else if (this.data.type === Type.Itinerary) {
          placeResponse = {
            userId: this.user.userId,
            googleResponse: JSON.stringify(response),
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
