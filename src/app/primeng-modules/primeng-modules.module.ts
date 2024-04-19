import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TabMenuModule } from 'primeng/tabmenu';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    DividerModule,
    AccordionModule,
    InputTextareaModule,
    ButtonModule,
    AutoCompleteModule,
    TooltipModule,
    DropdownModule,
    TabMenuModule,
    CalendarModule,
  ],
  exports: [
    CardModule,
    DividerModule,
    AccordionModule,
    InputTextareaModule,
    ButtonModule,
    AutoCompleteModule,
    TooltipModule,
    DropdownModule,
    TabMenuModule,
    CalendarModule,
  ],
})
export class PrimengModulesModule {}
