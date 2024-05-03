import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Operations } from 'src/app/enums/operations.enum';
import { Type } from 'src/app/enums/type.enum';
import { UserAuthenticationService } from 'src/app/features/user-authentication/services/user-authentication.service';
import { PopUpData } from 'src/app/models/pop-up-data.model';
import { ItineraryNote, TripNote } from 'src/app/models/trip-details.model';
import { Iuser } from 'src/app/models/user.model';
import { PopUpService } from '../../services/pop-up.service';

@Component({
  selector: 'app-add-edit-notes-pop-up',
  templateUrl: './add-edit-notes-pop-up.component.html',
  styleUrls: ['./add-edit-notes-pop-up.component.scss'],
})
export class AddEditNotesPopUpComponent implements OnInit {
  notes: string = '';
  data!: PopUpData;
  user!: Iuser;

  constructor(
    private dynamicDialogConfig: DynamicDialogConfig,
    private popUpService: PopUpService,
    private authService: UserAuthenticationService
  ) {
    this.data = this.dynamicDialogConfig.data;
    if (this.data.operationType === Operations.Edit) {
      this.notes =
        this.data.type === Type.Trip
          ? this.data?.tripNotes?.note
          : this.data?.ItineraryNotes?.note;
    }
  }

  ngOnInit(): void {
    this.user = this.authService.getStoredUserStateManagement().user;
  }

  onSubmit() {
    let response;
    const currentDate = new Date();
    if (this.data.type === Type.Trip) {
      response = {
        userId: this.user.userId,
        tripId: this.data.typeId,
        note: this.notes,
        status: true,
        createdBy: this.user.userId,
        createdOn: currentDate,
        updatedBy: this.user.userId,
        updatedOn: currentDate,
      } as TripNote;
      if (this.data.operationType === Operations.Edit) {
        response['id'] = this.data.tripNotes?.id || 0;
        response.createdOn = this.data.tripNotes?.createdOn;
        response.createdBy = this.data.tripNotes?.createdBy || this.user.userId;
      }
    } else if (this.data.type === Type.Itinerary) {
      response = {
        userId: this.user.userId,
        itineraryId: this.data.typeId,
        note: this.notes,
        status: true,
        createdBy: this.user.userId,
        createdOn: currentDate,
        updatedBy: this.user.userId,
        updatedOn: currentDate,
      } as ItineraryNote;
      if (this.data.operationType === Operations.Edit) {
        response['id'] = this.data.ItineraryNotes?.id || 0;
        response.createdOn = this.data.ItineraryNotes?.createdOn;
        response.createdBy =
          this.data.ItineraryNotes?.createdBy || this.user.userId;
      }
    }
    if (this.data.operationType === Operations.Add) {
      this.popUpService.addNotes(this.data.type, response);
    } else {
      this.popUpService.editNotes(this.data.type, response);
    }
  }

  onClose() {
    this.popUpService.onClose();
  }
}
