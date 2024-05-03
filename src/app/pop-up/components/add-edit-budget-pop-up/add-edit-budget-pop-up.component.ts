import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Operations } from 'src/app/enums/operations.enum';
import { PopUpData } from 'src/app/models/pop-up-data.model';
import { Budget } from 'src/app/models/trip-details.model';
import { PopUpService } from '../../services/pop-up.service';

@Component({
  selector: 'app-add-edit-budget-pop-up',
  templateUrl: './add-edit-budget-pop-up.component.html',
  styleUrls: ['./add-edit-budget-pop-up.component.scss'],
})
export class AddEditBudgetPopUpComponent {
  amount: number = 0;
  data!: PopUpData;

  constructor(
    private dynamicDialogConfig: DynamicDialogConfig,
    private popUpService: PopUpService
  ) {
    this.data = this.dynamicDialogConfig.data;
    if (this.data.operationType === Operations.Edit) {
      this.amount = this.data?.budget?.amount || 0;
    }
  }

  onSubmit() {
    const response: Budget = {
      id: this.data.budget?.id || 0,
      tripId: this.data.budget?.tripId || 0,
      amount: this.amount,
      status: true,
    };
    this.popUpService.saveBudget(response);
  }

  onClose() {
    this.popUpService.onClose();
  }
}
