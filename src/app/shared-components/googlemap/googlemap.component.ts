import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.scss']
})
export class GooglemapComponent implements OnChanges, AfterViewInit {
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;

  center!: google.maps.LatLngLiteral;

  @Input() googleResponse: any;
  @Input() destination: any;

  zoom = 10;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [];
  cityPolygon: google.maps.Polygon | undefined;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.center = {
      lat: this.googleResponse.place_results.gps_coordinates.latitude,
      lng: this.googleResponse.place_results.gps_coordinates.longitude
    };
  }
  
  ngAfterViewInit(): void {
    this.openInfoWindow();
  }

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.markerPositions.push(event.latLng.toJSON());
    }
  }

  openInfoWindow() {
    if (this.infoWindow && this.center) {
      this.infoWindow.position = this.center;
      this.infoWindow.open();
    }
  }
}
