import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { AddPlaceComponent } from './add-place/add-place.component';
import { PrimengModulesModule } from '../primeng-modules/primeng-modules.module';

@NgModule({
  declarations: [HeaderComponent, GooglemapComponent, AddPlaceComponent],
  imports: [CommonModule, GoogleMapsModule, PrimengModulesModule],
  exports: [HeaderComponent, GooglemapComponent, AddPlaceComponent],
})
export class SharedComponentsModule {}
