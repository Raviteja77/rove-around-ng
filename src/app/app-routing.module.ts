import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-authentication',
    pathMatch: 'full',
  },
  {
    path: 'user-authentication',
    loadChildren: () =>
      import('./features/user-authentication/user-authentication.module').then(
        (m) => m.UserAuthenticationModule
      ),
    data: { animation: 'isRight' },
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/trips-dashboard/trips-dashboard.module').then(
        (m) => m.TripsDashboardModule
      ),
    data: { animation: 'isRight' },
  },
  {
    path: 'travel-outline',
    loadChildren: () =>
      import('./features/travel-outline/travel-outline.module').then(
        (m) => m.TravelOutlineModule
      ),
    data: { animation: 'isLeft' },
  },
  {
    path: 'trip-details/:code',
    loadChildren: () =>
      import('./features/trip-details/trip-details.module').then(
        (m) => m.TripDetailsModule
      ),
    data: { animation: 'isLeft' },
  },
  {
    path: 'trip-invitation/:code',
    loadChildren: () =>
      import('./features/trip-invitation/trip-invitation.module').then(
        (m) => m.TripInvitationModule
      ),
    data: { animation: 'isLeft' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
