import { ConnectionModule } from './../../service/connection/connection.module';
import { AppMaterialModule } from './../../app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from './master.component';
import { MasterIndexComponent } from './master-index/master-index.component';

@NgModule({
  declarations: [
    MasterComponent,
    MasterIndexComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    AppMaterialModule,
    ConnectionModule
  ]
})
export class MasterModule { }
