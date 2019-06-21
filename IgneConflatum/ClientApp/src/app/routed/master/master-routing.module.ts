import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './master.component';
import { MasterIndexComponent } from './master-index/master-index.component';

const routes: Routes = [
  {
    path: 'master',
    component: MasterComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MasterIndexComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
