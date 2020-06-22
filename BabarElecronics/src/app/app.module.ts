import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './Layouts/nav/nav.component';
import { HomeComponent } from './Layouts/home/home.component';
import { FooterComponent } from './Layouts/footer/footer.component';
import { LEDComponent } from './Products/led/led.component';
import { RefrigeratorComponent } from './Products/refrigerator/refrigerator.component';
import { WashingMachineComponent } from './Products/washing-machine/washing-machine.component';
import { LaptopComponent } from './Products/laptop/laptop.component';
import { MobileComponent } from './Products/mobile/mobile.component';
import { AirConditionerComponent } from './Products/air-conditioner/air-conditioner.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    LEDComponent,
    RefrigeratorComponent,
    WashingMachineComponent,
    LaptopComponent,
    MobileComponent,
    AirConditionerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
