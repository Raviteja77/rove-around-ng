import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAuthenticationComponent } from './user-authentication.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from 'src/app/common/core/auth/auth.guard';
import { PrimengModulesModule } from 'src/app/primeng-modules/primeng-modules.module';

const routes: Routes = [
  {
      path: '',
      component: UserAuthenticationComponent,
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
