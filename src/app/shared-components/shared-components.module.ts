import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { GoogleMapsModule } from '@angular/google-maps';



@NgModule({
  declarations: [
    HeaderComponent,
    GooglemapComponent,
  ],
  imports: [
    CommonModule,
    GoogleMapsModule
  ],
  exports: [
    HeaderComponent,
    GooglemapComponent
  ]
})
export class SharedComponentsModule { }
