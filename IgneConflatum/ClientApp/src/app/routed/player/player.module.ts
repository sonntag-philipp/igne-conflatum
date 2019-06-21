import { ConnectionModule } from './../../service/connection/connection.module';
import { AppMaterialModule } from './../../app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerComponent } from './player.component';
import { PlayerIndexComponent } from './player-index/player-index.component';
import { PlayerSelectionComponent } from './player-selection/player-selection.component';
import { PlayerCharComponent } from './player-char/player-char.component';

@NgModule({
  declarations: [
    PlayerComponent,
    PlayerIndexComponent,
    PlayerSelectionComponent,
    PlayerCharComponent
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    AppMaterialModule,
    ConnectionModule
  ]
})
export class PlayerModule { }
