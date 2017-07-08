import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TaskUpAppComponent } from './taskUpApp.component';
import { TaskListComponent } from './components/task-list/task-list.component';

@NgModule({
  declarations: [
    TaskUpAppComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [TaskUpAppComponent]
})
export class TaskUpAppModule { }
