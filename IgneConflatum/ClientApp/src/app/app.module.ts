import { CharacterService } from './shared/character.service';
import { EffectEditDialog } from './widget/effect-edit-dialog/effect-edit.dialog';
import { AppMaterialModule } from './app-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharInfoComponent } from './widget/char-info/char-info.component';
import { CharBoardComponent } from './routed/char-board/char-board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarEditDialog } from './widget/bar-edit-dialog/bar-edit.dialog';
import { CharEditComponent } from './routed/char-edit/char-edit.component';
import { FormsModule } from '@angular/forms';
import { ConnectionService } from './shared/connection/connection.service';
import { IndexComponent } from './routed/index/index.component';
import { CharacteristicsComponent } from './widget/characteristics/characteristics.component';
import { CharacteristicsBarComponent } from './widget/characteristics/characteristics-bar/characteristics-bar.component';
import { CharacteristicsEffectComponent } from './widget/characteristics/characteristics-effect/characteristics-effect.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ShellComponent } from './domain/shell/shell.component';
import { ShellService } from './shared/shell.service';
import { IconInputDialog } from './widget/icon-input-dialog/icon-input-dialog.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CharInfoComponent,
    CharBoardComponent,
    BarEditDialog,
    CharEditComponent,
    EffectEditDialog,
    IndexComponent,
    CharacteristicsComponent,
    CharacteristicsBarComponent,
    CharacteristicsEffectComponent,
    ShellComponent,
    IconInputDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    RouterModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ConnectionService,
    CharacterService,
    ShellService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    BarEditDialog,
    EffectEditDialog,
    IconInputDialog
  ]
})
export class AppModule { }
