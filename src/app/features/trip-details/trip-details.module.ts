import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripDetailsComponent } from './trip-details.component';
import { TripDetailsRoutingModule } from './trip-details.routing.module';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';



@NgModule({
  declarations: [
    TripDetailsComponent
  ],
  imports: [
    CommonModule,
    TripDetailsRoutingModule,
    SharedComponentsModule
  ]
})
export class TripDetailsModule { }
