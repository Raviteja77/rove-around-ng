import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripsDashboardComponent } from './trips-dashboard.component';
import { PrimengModulesModule } from 'src/app/primeng-modules/primeng-modules.module';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { TripsDashBoardRoutingModule } from './trips-dashboard.routing.module';
import { FormsModule } from '@angular/forms';
import { TripsDashboardService } from './services/trips-dashboard.service';



@NgModule({
  declarations: [
    TripsDashboardComponent,
  ],
  imports: [
    CommonModule,
    TripsDashBoardRoutingModule,
    SharedComponentsModule,
    PrimengModulesModule,
    FormsModule
  ],
  providers: [TripsDashboardService]
})
export class TripsDashboardModule { }
