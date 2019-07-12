import { CharEditComponent } from './routed/char-edit/char-edit.component';
import { CharBoardComponent } from "./routed/char-board/char-board.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "charboard",
    component: CharBoardComponent
  },
  {
    path: "edit/:name",
    component: CharEditComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'charboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
