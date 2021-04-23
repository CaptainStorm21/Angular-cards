import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { NgForCardComponent } from './ng-for-card/ng-for-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NgForCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
