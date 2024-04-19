import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripDetailsComponent } from './trip-details.component';
import { AuthGuard } from 'src/app/common/core/auth/auth.guard';

const routes: Routes = [
{
    path: '',
    component: TripDetailsComponent,
    canActivate : [AuthGuard]
},
];

@NgModule({
    imports: [RouterModule.forChild(routes)], 
    exports: [RouterModule],
})
export class TripDetailsRoutingModule {}
