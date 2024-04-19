import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModulesModule } from 'src/app/primeng-modules/primeng-modules.module';
import { TravelOutlineComponent } from './travel-outline.component';
import { TravelOutlineRoutingModule } from './travel-outline.routing.module';

@NgModule({
  imports: [
    CommonModule,
    PrimengModulesModule,
    FormsModule,
    ReactiveFormsModule,
    TravelOutlineRoutingModule,
  ],
  declarations: [TravelOutlineComponent],
})
export class TravelOutlineModule {}
