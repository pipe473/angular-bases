import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Counter } from './counter/components/counter.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';
// import { HeroComponent } from './heroes/hero/hero.component';
// import { ListComponent } from './heroes/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    // HeroComponent,
    // ListComponent,
  ],
  imports: [
    BrowserModule,
    Counter,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
