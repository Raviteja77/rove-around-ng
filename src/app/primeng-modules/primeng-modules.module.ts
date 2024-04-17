import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { AccordionModule } from 'primeng/accordion';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
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
    TooltipModule
  ],
  exports: [
    CardModule,
    DividerModule,
    AccordionModule,
    InputTextareaModule,
    ButtonModule,
    AutoCompleteModule,
    TooltipModule
  ]
})
export class PrimengModulesModule { }
