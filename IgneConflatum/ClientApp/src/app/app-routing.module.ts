import { CharEditComponent } from './routed/char-edit/char-edit.component';
import { CharBoardComponent } from "./routed/char-board/char-board.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from './routed/index/index.component';

const routes: Routes = [
  {
    path: "board",
    component: CharBoardComponent
  },
  {
    path: "edit/:name",
    component: CharEditComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: IndexComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
