import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelOutlineComponent } from './travel-outline.component';
import { AuthGuard } from 'src/app/common/core/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: TravelOutlineComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelOutlineRoutingModule {}
