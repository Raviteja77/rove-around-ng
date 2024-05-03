import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/common/core/auth/auth.guard';
import { TripInvitationComponent } from './trip-invitation.component';

const routes: Routes = [
  {
    path: '',
    component: TripInvitationComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripInvitationRoutingModule {}
