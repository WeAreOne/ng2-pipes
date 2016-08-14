import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { SummaryPipe } from './posts/shared';
import { FromNowPipe } from './shared';

@NgModule({
  declarations: [ AppComponent, SummaryPipe, FromNowPipe ],
  imports:      [ BrowserModule ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
