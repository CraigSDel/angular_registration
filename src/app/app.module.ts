import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {RegistrationComponent} from './components/registration/registration.component';
import {PageOneComponent} from './components/registration/pages/page-one/page-one.component';
import {PageTwoComponent} from './components/registration/pages/page-two/page-two.component';
import {PageThreeComponent} from './components/registration/pages/page-three/page-three.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent
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
