import { Component } from '@angular/core';
import { trips, tripsDetails, users } from 'src/assets/mock-data/mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rove-around-ng';

  constructor() {
    if (localStorage.length === 0) {
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('trips', JSON.stringify(trips));
      localStorage.setItem('tripDetails', JSON.stringify(tripsDetails));
    }
  }
}
