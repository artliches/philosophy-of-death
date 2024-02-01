import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArmorComponent } from './armor/armor.component';
import { StatsComponent } from './stats/stats.component';
import { SurvivalComponent } from './survival/survival.component';
import { NameXpComponent } from './name-xp/name-xp.component';
import { FormsModule } from '@angular/forms';
import { CourageComponent } from './courage/courage.component';
import { UnderstandingComponent } from './understanding/understanding.component';
import { FightingArtsComponent } from './fighting-arts/fighting-arts.component';
import { DisordersComponent } from './disorders/disorders.component';

@NgModule({
  declarations: [
    AppComponent,
    ArmorComponent,
    StatsComponent,
    SurvivalComponent,
    NameXpComponent,
    CourageComponent,
    UnderstandingComponent,
    FightingArtsComponent,
    DisordersComponent
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
