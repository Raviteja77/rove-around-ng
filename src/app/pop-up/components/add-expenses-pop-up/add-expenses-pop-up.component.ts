import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Operations } from 'src/app/enums/operations.enum';
import { UserAuthenticationService } from 'src/app/features/user-authentication/services/user-authentication.service';
import { PopUpData } from 'src/app/models/pop-up-data.model';
import { Expense } from 'src/app/models/trip-details.model';
import { Iuser } from 'src/app/models/user.model';
import { PopUpService } from '../../services/pop-up.service';

@Component({
  selector: 'app-add-expenses-pop-up',
  templateUrl: './add-expenses-pop-up.component.html',
  styleUrls: ['./add-expenses-pop-up.component.scss'],
})
export class AddExpensesPopUpComponent implements OnInit {
  amount: number = 0;
  selectedCategory: any;
  selectedPaidBy: any;
  selectedSplit: any;

  data!: PopUpData;
  user!: Iuser;

  categories: any[] = [];
  paidBy: any[] = [];
  split: any[] = [];

  constructor(
    private dynamicDialogConfig: DynamicDialogConfig,
    private popUpService: PopUpService,
    private authService: UserAuthenticationService
  ) {
    this.data = this.dynamicDialogConfig.data;
  }

  ngOnInit(): void {
    this.paidBy = [];
    this.user = this.authService.getStoredUserStateManagement().user;
    this.categories = [
      { name: 'Flights', value: 1 },
      { name: 'Transit', value: 2 },
      { name: 'Car Rental', value: 3 },
      { name: 'Lodging', value: 4 },
      { name: 'Food', value: 5 },
      { name: 'Drinks', value: 6 },
      { name: 'Activities', value: 7 },
      { name: 'Gas', value: 8 },
      { name: 'Groceries', value: 9 },
      { name: 'Shopping', value: 10 },
      { name: 'Other', value: 11 },
    ];
    this.split = [
      { name: 'Everyone', value: 1 },
      { name: 'Individuals', value: 2 },
    ];
    (this.data?.users || []).forEach((user) => {
      this.paidBy.push({
        name:
          user.userName + (user.userId === this.user.userId ? ' (You)' : ''),
        value: user.userId,
      });
    });
    if (this.paidBy.length === 1) {
      this.selectedPaidBy = this.paidBy[0];
    }
    if (this.data.operationType === Operations.Edit) {
      this.amount = this.data.expense?.amount || 0;
      this.selectedPaidBy =
        this.paidBy.find(
          (user) => user?.value === this.data?.expense?.userId
        ) || this.paidBy[0];
    }
  }

  isDisabled() {
    return !(
      this.amount !== 0 &&
      this.selectedCategory &&
      this.selectedPaidBy &&
      this.selectedSplit
    );
  }

  onSubmit() {
    const response: Expense = {
      tripId: this.data.typeId,
      userId: this.selectedPaidBy.value,
      categoryId: this.selectedCategory.value,
      categoryDescription: '',
      paidOn: 0,
      amount: this.amount,
      splitType: this.selectedSplit.name,
      status: true,
    };
    if (this.data.operationType === Operations.Edit) {
      response.id = this.data.expense?.id;
      this.popUpService.editExpense(response);
    } else {
      this.popUpService.addExpense(response);
    }
  }

  onClose() {
    this.popUpService.onClose();
  }
}
