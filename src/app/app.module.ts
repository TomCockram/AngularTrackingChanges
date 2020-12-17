import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FruitPickerComponent } from './fruit-picker/fruit-picker.component';
import { FruitSummaryComponent } from './fruit-summary/fruit-summary.component';

@NgModule({
  declarations: [AppComponent, FruitPickerComponent, FruitSummaryComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
