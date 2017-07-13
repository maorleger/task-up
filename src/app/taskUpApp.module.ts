import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { TaskUpAppComponent } from './taskUpApp.component';
import { TaskListComponent } from './components/task-list/task-list.component';

import {
  MdListModule,
  MdCheckboxModule,
  MdCardModule
} from '@angular/material';

@NgModule({
  declarations: [
    TaskUpAppComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdListModule,
    MdCheckboxModule,
    MdCardModule
  ],
  providers: [],
  bootstrap: [TaskUpAppComponent]
})
export class TaskUpAppModule { }
