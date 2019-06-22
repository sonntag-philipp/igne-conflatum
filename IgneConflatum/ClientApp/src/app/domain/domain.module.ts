import { AppMaterialModule } from './../app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelativeTableComponent } from './relative-table/relative-table.component';
import { ValueDialogComponent } from './value-dialog/value-dialog.component';

@NgModule({
  declarations: [
    RelativeTableComponent,
    ValueDialogComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    RelativeTableComponent
  ],
  entryComponents: [
    ValueDialogComponent
  ]
})
export class DomainModule { }
