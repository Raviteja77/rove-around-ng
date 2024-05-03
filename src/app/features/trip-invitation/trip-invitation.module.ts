import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PrimengModulesModule } from 'src/app/primeng-modules/primeng-modules.module';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { TripInvitationService } from './services/trip-invitation.service';
import { TripInvitationComponent } from './trip-invitation.component';
import { TripInvitationRoutingModule } from './trip-invitation.routing.module';

@NgModule({
  declarations: [TripInvitationComponent],
  imports: [
    CommonModule,
    PrimengModulesModule,
    TripInvitationRoutingModule,
    SharedComponentsModule,
    HttpClientModule,
  ],
  providers: [TripInvitationService],
})
export class TripInvitationModule {}
