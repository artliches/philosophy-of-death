import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArmorComponent } from './armor/armor.component';
import { StatsComponent } from './stats/stats.component';
import { SurvivalComponent } from './survival/survival.component';
import { NameXpComponent } from './name-xp/name-xp.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ArmorComponent,
    StatsComponent,
    SurvivalComponent,
    NameXpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
