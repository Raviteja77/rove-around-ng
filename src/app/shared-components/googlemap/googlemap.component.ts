import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MapInfoWindow } from '@angular/google-maps';
import { Markers } from 'src/app/models/markers.model';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.scss'],
})
export class GooglemapComponent implements OnChanges, AfterViewInit {
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;

  center!: google.maps.LatLngLiteral;

  @Input() googleResponse: any;
  @Input() destination: any;
  @Input() locationMarkers: Markers[][] = [];

  title: string = '';

  zoom = 10;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: any[] = [];
  cityPolygon: google.maps.Polygon | undefined;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.center = {
      lat: this.googleResponse.place_results.gps_coordinates.latitude,
      lng: this.googleResponse.place_results.gps_coordinates.longitude,
    };
    this.getMarkerOptions();
    this.title = this.googleResponse?.place_results?.description;
  }

  getMarkerOptions(): void {
    this.markerOptions = {};
    if (this.locationMarkers.length === 0) {
      this.markerPositions = [];
      return;
    }
    this.locationMarkers?.forEach((marker, index) => {
      marker?.forEach((el) => {
        if (el.type === 'trip') {
          this.markerOptions = {
            icon: {
              url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
            },
            title: el.title,
          };
        } else {
          switch (index) {
            case 0:
              this.markerOptions = {
                icon: {
                  url: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
                },
                title: el.title,
              };
              break;
            case 1:
              this.markerOptions = {
                icon: {
                  url: 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
                },
                title: el.title,
              };
              break;
            case 2:
              this.markerOptions = {
                icon: {
                  url: 'https://maps.google.com/mapfiles/ms/icons/orange-dot.png',
                },
                title: el.title,
              };
              break;
            case 3:
              this.markerOptions = {
                icon: {
                  url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                },
                title: el.title,
              };
              break;
            case 4:
              this.markerOptions = {
                icon: {
                  url: 'https://maps.google.com/mapfiles/ms/icons/purple-dot.png',
                },
                title: el.title,
              };
              break;
          }
        }
        const position: google.maps.LatLngLiteral = {
          lat: el.lat,
          lng: el.lng,
        };
        this.markerPositions.push({ position, options: this.markerOptions });
      });
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.openInfoWindow();
    }, 1000)
  }

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.markerPositions.push(event.latLng.toJSON());
    }
  }

  openInfoWindow(markerData?: any, addDyanmicTitle?: boolean) {
    if (addDyanmicTitle) {
      this.title = markerData.options.title;
      this.center = markerData.position;
    } else if(!this.googleResponse?.place_results?.description){
      return;
    } else {
      this.title = this.googleResponse?.place_results?.description;
      this.center = {
        lat: this.googleResponse.place_results.gps_coordinates.latitude,
        lng: this.googleResponse.place_results.gps_coordinates.longitude,
      }
    }
    if (this.infoWindow && this.center) {
      this.infoWindow.position = this.center;
      this.infoWindow.open();
    }
  }
}
