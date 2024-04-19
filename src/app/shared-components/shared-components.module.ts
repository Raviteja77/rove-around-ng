import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { AddPlaceComponent } from './add-place/add-place.component';



@NgModule({
  declarations: [
    HeaderComponent,
    GooglemapComponent,
    AddPlaceComponent,
  ],
  imports: [
    CommonModule,
    GoogleMapsModule
  ],
  exports: [
    HeaderComponent,
    GooglemapComponent,
    AddPlaceComponent
  ]
})
export class SharedComponentsModule { }
