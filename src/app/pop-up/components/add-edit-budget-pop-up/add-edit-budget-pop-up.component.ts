import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Operations } from 'src/app/enums/operations.enum';
import { PopUpService } from '../../services/pop-up.service';
import { BudgetResponse } from 'src/app/models/budget-response.model';

@Component({
  selector: 'app-add-edit-budget-pop-up',
  templateUrl: './add-edit-budget-pop-up.component.html',
  styleUrls: ['./add-edit-budget-pop-up.component.scss'],
})
export class AddEditBudgetPopUpComponent {
  amount: string = '';
  data: any = {};

  constructor(
    private dynamicDialogConfig: DynamicDialogConfig,
    private popUpService: PopUpService
  ) {
    this.data = this.dynamicDialogConfig.data;
    if (this.data.operationType === Operations.Edit) {
      this.amount = this.data.budget;
    }
  }

  onSubmit() {
    const response = {
      ...this.data,
      budget: this.amount,
    } as BudgetResponse;
    this.popUpService.saveBudget(response);
  }

  onClose() {
    this.popUpService.onClose();
  }
}
