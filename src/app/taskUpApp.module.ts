import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TaskUpAppComponent } from './taskUpApp.component';

@NgModule({
  declarations: [
    TaskUpAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [TaskUpAppComponent]
})
export class TaskUpAppModule { }
