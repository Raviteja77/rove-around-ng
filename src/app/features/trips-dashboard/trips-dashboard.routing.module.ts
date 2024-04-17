import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripsDashboardComponent } from './trips-dashboard.component';

const routes: Routes = [
{
    path: '',
    component: TripsDashboardComponent
},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TripsDashBoardRoutingModule {}
