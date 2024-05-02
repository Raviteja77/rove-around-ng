import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.scss'],
})
export class AddPlaceComponent implements OnInit, AfterViewInit {
  placeSuggestion!: HTMLInputElement;
  searchInput!: HTMLInputElement;
  autocomplete!: google.maps.places.Autocomplete;
  map!: google.maps.Map;
  marker!: google.maps.Marker;
  infowindow!: google.maps.InfoWindow;

  @Output() placeSelected = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    this.initMap();
  }

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

  initMap() {
    // this.map = new google.maps.Map(this.searchInput, {
    //   center: { lat: -33.8688, lng: 151.2195 },
    //   zoom: 13,
    // });

    // this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(this.searchInput);

    // this.infowindow = new google.maps.InfoWindow();
    // this.marker = new google.maps.Marker({
    //   map: this.map,
    //   anchorPoint: new google.maps.Point(0, -29),
    // });
  }

  fillInAddress() {
    // this.infowindow.close();
    // this.marker.setVisible(false);
    const place = this.autocomplete.getPlace();

    if (!place.geometry) {
      window.alert("Autocomplete's returned place contains no geometry");
      return;
    }

    // if (place.geometry.viewport) {
    //   this.map.fitBounds(place.geometry.viewport);
    // } else {
    //   if(place.geometry.location) {
    //     this.map.setCenter(place.geometry.location);
    //     this.map.setZoom(17);
    //   }
    // }

    // this.marker.setIcon({
    //   url: place.icon || '',
    //   size: new google.maps.Size(71, 71),
    //   origin: new google.maps.Point(0, 0),
    //   anchor: new google.maps.Point(17, 34),
    //   scaledSize: new google.maps.Size(35, 35),
    // });

    // this.marker.setPosition(place.geometry.location);
    // this.marker.setVisible(true);

    let address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name) || '',
        (place.address_components[1] && place.address_components[1].short_name) || '',
        (place.address_components[2] && place.address_components[2].short_name) || '',
      ].join(' ');
    }

    // this.infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
    // this.infowindow.open(this.map, this.marker);
    console.log(place);
    
    this.placeSelected.emit(place);
  }
}