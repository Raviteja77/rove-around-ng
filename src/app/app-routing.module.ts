import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user-authentication',
    loadChildren: () =>
      import('./features/user-authentication/user-authentication.module').then(
        (m) => m.UserAuthenticationModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/trips-dashboard/trips-dashboard.module').then(
        (m) => m.TripsDashboardModule
      ),
  },
  {
    path: 'travel-outline',
    loadChildren: () =>
      import('./features/travel-outline/travel-outline.module').then(
        (m) => m.TravelOutlineModule
      ),
  },
  {
    path: 'trip-details/:code',
    loadChildren: () =>
      import('./features/trip-details/trip-details.module').then(
        (m) => m.TripDetailsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
