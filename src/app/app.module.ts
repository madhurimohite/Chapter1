import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { StringpComponent } from './databinding/stringp.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    StringpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
