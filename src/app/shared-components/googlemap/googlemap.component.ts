import { Component, ViewChild } from '@angular/core';
import { MapGeocoder, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.scss']
})
export class GooglemapComponent {
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  
  center: google.maps.LatLngLiteral = { lat: 35.1031, lng: -80.5120 };
  zoom = 6;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];

  constructor(geocoder: MapGeocoder) {
    // geocoder.geocode({
    //   address: '1600 Amphitheatre Parkway, Mountain View, CA'
    // }).subscribe(({results}) => {
    //   console.log(results);
    // });
  }

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.markerPositions.push(event.latLng.toJSON());
    }
  }

  openInfoWindow(marker: MapMarker) {
    if(this.infoWindow) {
      this.infoWindow.open(marker);
    }
  }

}