import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EqubHeaderComponent } from './equb-header/equb-header.component';
import { EqubFooterComponent } from './equb-footer/equb-footer.component';
import { EqubMainComponent } from './equb-main/equb-main.component';
import { EqubComponent } from './equb/equb.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material.module';
import { ResultComponentComponent } from './equb-main/result-component/result-component.component';

@NgModule({
  declarations: [
    AppComponent,
    EqubHeaderComponent,
    EqubFooterComponent,
    EqubMainComponent,
    EqubComponent,
    ResultComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
