import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { TaskUpAppComponent } from './taskUpApp.component';
import { TaskListComponent } from './components/task-list/task-list.component';

import {
  MdListModule,
  MdCheckboxModule,
  MdCardModule,
  MdButtonModule
} from '@angular/material';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [
    TaskUpAppComponent,
    TaskListComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdListModule,
    MdCheckboxModule,
    MdCardModule,
    MdButtonModule
  ],
  providers: [],
  bootstrap: [TaskUpAppComponent]
})
export class TaskUpAppModule { }
