import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { MessageService } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { ToastModule } from 'primeng/toast';
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
    DynamicDialogModule,
    ProgressBarModule,
    ToastModule,
    InputTextModule,
    TableModule,
    ChartModule,
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
    DynamicDialogModule,
    ProgressBarModule,
    ToastModule,
    InputTextModule,
    TableModule,
    ChartModule,
  ],
  providers: [DialogService, MessageService],
})
export class PrimengModulesModule {}
