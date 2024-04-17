import { Component, OnInit } from '@angular/core';
import { MapGeocoder } from '@angular/google-maps';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss']
})
export class TripDetailsComponent implements OnInit {
  notes: string = '';
  places: string = '';
  filteredPlaces: any = [];
  notesInput: any = []; 

  constructor(private geocoder: MapGeocoder) {}

  ngOnInit(): void {
  }

  filterPlace(event: any): void {
    console.log(event);
    // this.geocoder.geocode({
    //   address: event.query
    // }).subscribe(({results}) => {
    //   console.log(results);
    // });
  }

}
