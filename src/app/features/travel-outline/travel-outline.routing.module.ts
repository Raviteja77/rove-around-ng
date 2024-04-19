import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelOutlineComponent } from './travel-outline.component';

const routes: Routes = [
  {
    path: '',
    component: TravelOutlineComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelOutlineRoutingModule {}
