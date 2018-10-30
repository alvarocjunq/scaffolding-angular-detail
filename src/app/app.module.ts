import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ScaffoldingDetailComponent } from 'projects/scaffolding-detail/src/lib/scaffolding-detail.component';
import { MaterialModule } from 'projects/scaffolding-detail/src/lib/material-module';

@NgModule({
  declarations: [
    AppComponent,
    ScaffoldingDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [ScaffoldingDetailComponent]
})
export class AppModule { }
