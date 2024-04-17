import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripDetailsComponent } from './trip-details.component';
import { TripDetailsRoutingModule } from './trip-details.routing.module';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { PrimengModulesModule } from 'src/app/primeng-modules/primeng-modules.module';
import { FormsModule } from '@angular/forms';
import { GoogleMap } from '@angular/google-maps';



@NgModule({
  declarations: [
    TripDetailsComponent
  ],
  imports: [
    CommonModule,
    TripDetailsRoutingModule,
    SharedComponentsModule,
    PrimengModulesModule,
    FormsModule,
  ],
  providers: [GoogleMap]
})
export class TripDetailsModule { }
