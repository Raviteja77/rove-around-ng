import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Operations } from 'src/app/enums/operations.enum';
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

  data: any = {};

  categories: any[] = [];
  paidBy: any[] = [];
  split: any[] = [];

  constructor(
    private dynamicDialogConfig: DynamicDialogConfig,
    private popUpService: PopUpService
  ) {
    this.data = this.dynamicDialogConfig.data;
  }

  ngOnInit(): void {
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
    this.paidBy = this.data?.users || [];
    if (this.data.operationType === Operations.Edit) {
      this.amount = this.data.amount;
      this.selectedPaidBy =
        this.paidBy.find((user) => user?.id === this.data?.user?.id) ||
        this.paidBy[0];
      this.selectedCategory = this.categories.find(
        (category) => category.value === this.data?.category
      );
    }
  }

  onSubmit() {
    const response = {
      ...this.data,
      notes: this.amount,
    };
    // this.popUpService.addNotes(response);
  }

  onClose() {
    this.popUpService.onClose();
  }
}
