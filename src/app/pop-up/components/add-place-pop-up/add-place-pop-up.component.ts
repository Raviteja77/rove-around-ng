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
    const response = {
      ...this.data,
      ...this.place,
    };
    this.popUpService.savePlace(response);
  }

  onClose() {
    this.popUpService.onClose();
  }
}
