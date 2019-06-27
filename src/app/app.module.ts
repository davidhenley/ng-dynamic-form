import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormsModule } from './dynamic-forms/dynamic-forms.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DynamicFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
