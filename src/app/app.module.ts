import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {RegistrationComponent} from './components/registration/registration.component';
import {Page01Component} from './components/registration/page01/page01.component';
import {Page03Component} from './components/registration/page03/page03.component';
import {Page02Component} from './components/registration/page02/page02.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    Page01Component,
    Page02Component,
    Page03Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
