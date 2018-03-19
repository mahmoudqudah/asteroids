import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MahmpudqudahComponent } from './mahmpudqudah/mahmpudqudah.component';
// import { Persons } from './mahmpudqudah/Persons';


@NgModule({
  declarations: [
    AppComponent,
    MahmpudqudahComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
