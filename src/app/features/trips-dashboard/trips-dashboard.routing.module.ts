import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripsDashboardComponent } from './trips-dashboard.component';
import { AuthGuard } from 'src/app/common/core/auth/auth.guard';

const routes: Routes = [
{
    path: '',
    component: TripsDashboardComponent,
    canActivate : [AuthGuard]
},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TripsDashBoardRoutingModule {}
