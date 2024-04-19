import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { async } from 'rxjs';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.scss'],
})

export class AddPlaceComponent implements OnInit {

  autocomplete!: google.maps.places.Autocomplete;
  placeSuggestion!: HTMLInputElement;

  @Output() placeSelected = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.placeSuggestion = document.querySelector("#place-suggestion") as HTMLInputElement;

    this.autocomplete = new google.maps.places.Autocomplete(this.placeSuggestion, {
      fields: ["address_components", "geometry"],
      types: ["address"],
    });

    this.autocomplete.addListener("place_changed", () => {
      this.fillInAddress();
    });
  }

  fillInAddress() {
    this.placeSelected.emit(this.autocomplete.getPlace());
  }
}
