import { MasterModule } from './routed/master/master.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { ShellComponent } from './shell/shell.component';
import { ShellService } from './shell/shell.service';
import { PlayerModule } from './routed/player/player.module';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    MasterModule,
    PlayerModule
  ],
  providers: [
    ShellService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
