import { PlayerSelectionComponent } from './player-selection/player-selection.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './player.component';
import { PlayerIndexComponent } from './player-index/player-index.component';
import { PlayerCharComponent } from './player-char/player-char.component';

const routes: Routes = [
  {
    path: 'player',
    component: PlayerComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: PlayerIndexComponent
      },
      {
        path: ':gameId/selection',
        component: PlayerSelectionComponent
      },
      {
        path: ':gameId/char/:charId',
        component: PlayerCharComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
