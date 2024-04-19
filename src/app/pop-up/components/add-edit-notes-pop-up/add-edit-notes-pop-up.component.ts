import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Operations } from 'src/app/enums/operations.enum';
import { Type } from 'src/app/enums/type.enum';
import { PopUpService } from '../../services/pop-up.service';

@Component({
  selector: 'app-add-edit-notes-pop-up',
  templateUrl: './add-edit-notes-pop-up.component.html',
  styleUrls: ['./add-edit-notes-pop-up.component.scss'],
})
export class AddEditNotesPopUpComponent {
  notes: string = '';
  data: any = {};

  constructor(
    private dynamicDialogConfig: DynamicDialogConfig,
    private popUpService: PopUpService
  ) {
    this.data = this.dynamicDialogConfig.data;
    if (this.data.operationType === Operations.Edit) {
      this.notes = this.data.notes;
    }
  }

  onSubmit() {
    const response = {
      ...this.data,
      notes: this.notes,
    };
    this.popUpService.saveNotes(response);
  }

  onClose() {
    this.popUpService.onClose();
  }
}
