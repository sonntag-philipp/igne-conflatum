import { AppMaterialModule } from './../app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelativeTableComponent } from './relative-table/relative-table.component';

@NgModule({
  declarations: [RelativeTableComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    RelativeTableComponent
  ]
})
export class DomainModule { }
