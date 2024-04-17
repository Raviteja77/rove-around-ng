import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/trips-dashboard/trips-dashboard.module').then(
        (m) => m.TripsDashboardModule
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
