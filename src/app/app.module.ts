import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//added by me
import {MaterialModule} from './material.module';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Route} from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
