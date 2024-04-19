import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModulesModule } from 'src/app/primeng-modules/primeng-modules.module';
import { TravelOutlineComponent } from './travel-outline.component';
import { TravelOutlineRoutingModule } from './travel-outline.routing.module';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { PopUpModule } from 'src/app/pop-up/pop-up.module';
import { TripDetailsModule } from '../trip-details/trip-details.module';

@NgModule({
  imports: [
    CommonModule,
    PrimengModulesModule,
    FormsModule,
    ReactiveFormsModule,
    TravelOutlineRoutingModule,
    SharedComponentsModule,
    PopUpModule,
    TripDetailsModule,
  ],
  declarations: [TravelOutlineComponent],
})
export class TravelOutlineModule {}
