import { Component, OnInit } from '@angular/core';
import { TripsDashboardService } from './services/trips-dashboard.service';
import { Trip } from 'src/app/models/trip.model';

@Component({
  selector: 'app-trips-dashboard',
  templateUrl: './trips-dashboard.component.html',
  styleUrls: ['./trips-dashboard.component.scss'],
})
export class TripsDashboardComponent implements OnInit {
  status: any[] = [];
  selectedStatus: any;
  date = new Date();

  trips: Trip[] = [];
  isOnGoingAndUpcomingTripsAvailable: boolean = false;
  isCompletedTripsAvailable: boolean = false;
  constructor(private tripsDashboardService: TripsDashboardService) {}

  ngOnInit() {
    this.status = [
      { name: 'Ongoing & Upcoming', value: 'Ongoing & Upcoming' },
      { name: 'Completed', value: 'Completed' },
    ];
    this.selectedStatus = this.status[0];
    this.getTrips();
  }

  newPlan() {}

  getTrips() {
    this.isCompletedTripsAvailable = false;
    this.isOnGoingAndUpcomingTripsAvailable = false;
    this.tripsDashboardService.getTrips().subscribe({
      next: (data: Trip[]) => {
        data.forEach((trip) => {
          const currentDate = new Date();
          const startDate = new Date(trip.startDate);
          const endDate = new Date(trip.endDate);
          if (endDate < currentDate) {
            trip.tripStatus = 'Completed';
            this.isCompletedTripsAvailable = true;
          } else if (startDate > currentDate) {
            trip.tripStatus = 'Ongoing & Upcoming';
            const diffInMs = Math.abs(
              startDate.getTime() - currentDate.getTime()
            );
            trip.numberOfDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
            this.isOnGoingAndUpcomingTripsAvailable = true;
          } else {
            this.isOnGoingAndUpcomingTripsAvailable = true;
            trip.tripStatus = 'Ongoing & Upcoming';
          }
        });
        this.trips = data;
      },
      error: (error) => {},
    });
  }
}
