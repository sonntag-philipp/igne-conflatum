import { ConnectionService } from './connection.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ConnectionService
  ]
})
export class ConnectionModule { }
