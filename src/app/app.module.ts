import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaffFormComponent } from './components/staff-form/staff-form.component';
import { FormsModule } from '@angular/forms'; //templat driven forms

@NgModule({
  declarations: [
    AppComponent,
    StaffFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
