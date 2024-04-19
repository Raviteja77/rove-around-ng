import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { PopUpService } from '../../services/pop-up.service';

@Component({
  selector: 'app-add-place-pop-up',
  templateUrl: './add-place-pop-up.component.html',
  styleUrls: ['./add-place-pop-up.component.scss'],
})
export class AddPlacePopUpComponent {
  place: any;
  data: any = {};

  constructor(
    private dynamicDialogConfig: DynamicDialogConfig,
    private popUpService: PopUpService
  ) {
    this.data = this.dynamicDialogConfig.data;
  }

  onSubmit() {
    this.popUpService.getPlaceDetails(this.place.long_name).subscribe(response => {
      console.log(response);
      const formattedResponse = {
        ...this.data,
        place: JSON.stringify(response)
      };
      this.popUpService.savePlace(response);
    });
  }

  onClose() {
    this.popUpService.onClose();
  }

  handlePlaceSelection(event: any): void {
    this.place = event;
  }
}
