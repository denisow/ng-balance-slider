import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { balanceSliderComponent } from './balance-slider.component';


@NgModule({
  declarations: [
    balanceSliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [balanceSliderComponent]
})
export class balanceSliderModule { }
