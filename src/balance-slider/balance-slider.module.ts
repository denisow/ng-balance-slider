import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { balanceSliderComponent } from './balance-slider.component';


@NgModule({
  declarations: [
    balanceSliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [balanceSliderComponent]
})
export class balanceSliderModule { }
