import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { BeltsComponent } from './belts/belts.component';

@NgModule({
    declarations: [AppComponent, BeltsComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
