import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllComponent } from './pages/all/all.component';
import { CompletedComponent } from './pages/completed/completed.component';
import { UncompletedComponent } from './pages/uncompleted/uncompleted.component';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    CompletedComponent,
    UncompletedComponent
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
