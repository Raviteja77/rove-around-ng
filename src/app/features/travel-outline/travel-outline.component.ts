import { Component } from '@angular/core';

@Component({
  selector: 'app-travel-outline',
  templateUrl: './travel-outline.component.html',
  styleUrls: ['./travel-outline.component.scss'],
})
export class TravelOutlineComponent {
  selectedItem: any;
  suggestions: any;
  rangeDates: any;
  minDate: any;

  search(event: any) {
    console.log(event);
  }
}
