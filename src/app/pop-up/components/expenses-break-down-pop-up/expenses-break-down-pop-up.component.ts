import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { PopUpData } from 'src/app/models/pop-up-data.model';
import { PopUpService } from '../../services/pop-up.service';

@Component({
  selector: 'app-expenses-break-down-pop-up',
  templateUrl: './expenses-break-down-pop-up.component.html',
  styleUrls: ['./expenses-break-down-pop-up.component.scss'],
})
export class ExpensesBreakDownPopUpComponent implements OnInit {
  data: any;
  popUpData!: PopUpData;

  options: any;
  categories = [
    'Flights',
    'Transit',
    'Car Rental',
    'Lodging',
    'Food',
    'Drinks',
    'Activities',
    'Gas',
    'Groceries',
    'Shopping',
    'Other',
  ];

  constructor(
    private dynamicDialogConfig: DynamicDialogConfig,
    private popUpService: PopUpService
  ) {
    this.popUpData = this.dynamicDialogConfig.data;
  }

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const CategoryExpenses = Array(11).fill(0);
    this.popUpData.expenses?.forEach((expense) => {
      CategoryExpenses[expense.categoryId - 1] += expense.amount;
    });
    this.data = {
      labels: this.categories,
      datasets: [
        {
          label: 'Category Expenses',
          borderColor: documentStyle.getPropertyValue('--bluegray-400'),
          pointBackgroundColor:
            documentStyle.getPropertyValue('--bluegray-400'),
          pointBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor:
            documentStyle.getPropertyValue('--bluegray-400'),
          data: CategoryExpenses,
        },
      ],
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        r: {
          grid: {
            color: textColorSecondary,
          },
          pointLabels: {
            color: textColorSecondary,
          },
        },
      },
    };
  }
}
