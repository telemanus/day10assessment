import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//added by me
import {MaterialModule} from './material.module';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Route} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegformComponent } from './components/regform.component';
import { ConfirmComponent } from './components/confirm.component';

const ROUTES: Route[] = [
  { path: 'regform', component: RegformComponent },
  { path: 'confirm', component: ConfirmComponent, data: {formInput: 'form'} },
  { path: "**", redirectTo:'/regform', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    RegformComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
