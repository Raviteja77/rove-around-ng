import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAuthenticationComponent } from './user-authentication.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModulesModule } from 'src/app/primeng-modules/primeng-modules.module';
import { NonAuthGuard } from 'src/app/common/core/non-auth/non-auth.guard';

const routes: Routes = [
  {
      path: '',
      component: UserAuthenticationComponent,
      canActivate : [NonAuthGuard]
  },
];


@NgModule({
  declarations: [
    UserAuthenticationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimengModulesModule,
    RouterModule.forChild(routes)
  ]
})
export class UserAuthenticationModule { }
