import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExpensesPopUpComponent } from './components/add-expenses-pop-up/add-expenses-pop-up.component';
import { AddPlacePopUpComponent } from './components/add-place-pop-up/add-place-pop-up.component';
import { AddEditNotesPopUpComponent } from './components/add-edit-notes-pop-up/add-edit-notes-pop-up.component';
import { ExpensesBreakDownPopUpComponent } from './components/expenses-break-down-pop-up/expenses-break-down-pop-up.component';
import { FormsModule } from '@angular/forms';
import { PrimengModulesModule } from '../primeng-modules/primeng-modules.module';
import { PopUpService } from './services/pop-up.service';

@NgModule({
  declarations: [
    AddExpensesPopUpComponent,
    AddPlacePopUpComponent,
    AddEditNotesPopUpComponent,
    ExpensesBreakDownPopUpComponent,
  ],
  imports: [CommonModule, FormsModule, PrimengModulesModule],
  providers: [PopUpService],
})
export class PopUpModule {}
