import { Component, EventEmitter, Output, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.scss'],
})
export class AddPlaceComponent implements AfterViewInit {
  placeSuggestion!: HTMLInputElement;
  searchInput!: HTMLInputElement;
  autocomplete!: google.maps.places.Autocomplete;
  map!: google.maps.Map;
  marker!: google.maps.Marker;
  infowindow!: google.maps.InfoWindow;

  @Output() placeSelected = new EventEmitter<any>();

  constructor() {}

  ngAfterViewInit(): void {
    this.placeSuggestion = document.querySelector("#place-suggestion") as HTMLInputElement;
    this.autocomplete = new google.maps.places.Autocomplete(this.placeSuggestion, {
      fields: ["address_components", "geometry"],
      types: ["geocode"],
    });
    this.autocomplete.addListener("place_changed", () => {
      this.fillInAddress();
    });
  }

  fillInAddress() {
    const place = this.autocomplete.getPlace();

    if (!place.geometry) {
      window.alert("Autocomplete's returned place contains no geometry");
      return;
    }

    let address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name) || '',
        (place.address_components[1] && place.address_components[1].short_name) || '',
        (place.address_components[2] && place.address_components[2].short_name) || '',
      ].join(' ');
    }
    
    this.placeSelected.emit(place);
  }
}