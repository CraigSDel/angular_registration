import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {RegistrationComponent} from './components/registration/registration.component';
import {Page01Component} from './components/registration/page01/page01.component';
import {Page03Component} from './components/registration/page03/page03.component';
import {Page02Component} from './components/registration/page02/page02.component';
import {StoreModule} from '@ngrx/store';
import {registrationReducer} from './reducer/registration.reducer';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './module/demo-material/demo-material.module';
import {RegistrationSaveComponent} from './components/registration/registration-save/registration-save.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    Page01Component,
    Page02Component,
    Page03Component,
    RegistrationSaveComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    StoreModule.forRoot({user: registrationReducer})
  ],
  entryComponents: [RegistrationSaveComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
