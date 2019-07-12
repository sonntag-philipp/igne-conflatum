import { EffectEditDialog } from './widget/effect-edit-dialog/effect-edit.dialog';
import { AppMaterialModule } from './app-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharInfoComponent } from './widget/char-info/char-info.component';
import { CharBoardComponent } from './routed/char-board/char-board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharListComponent } from './widget/char-list/char-list.component';
import { BarEditDialog } from './widget/bar-edit-dialog/bar-edit.dialog';
import { CharEditComponent } from './routed/char-edit/char-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CharInfoComponent,
    CharBoardComponent,
    CharListComponent,
    BarEditDialog,
    CharEditComponent,
    EffectEditDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    BarEditDialog,
    EffectEditDialog
  ]
})
export class AppModule { }
