import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArmorComponent } from './armor/armor.component';
import { StatsComponent } from './stats/stats.component';
import { SurvivalComponent } from './survival/survival.component';

@NgModule({
  declarations: [
    AppComponent,
    ArmorComponent,
    StatsComponent,
    SurvivalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
