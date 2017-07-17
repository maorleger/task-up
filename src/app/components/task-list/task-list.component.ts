// Angular imports
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

// Service module imports
import { TasksService } from '../../services/services.module';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  providers: [TasksService],
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {

  tasks: string[] = [];
  originalTasks: string[];
  isInEditMode: boolean;

  constructor(private taskService: TasksService) {
    this.isInEditMode = false;
  }

  ngOnInit() {
    this.taskService.getTasks().then((result) => {
      this.tasks = result;
    });
  }

  onEditButtonClicked() {
    this.setEditMode(true);
  }

  onCancelButtonClicked() {
    this.setEditMode(false);
    this.tasks = this.originalTasks;
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  setEditMode(isInEditMode: boolean) {
    this.isInEditMode = isInEditMode;

    if (this.isInEditMode) {
      this.originalTasks = [];

      this.tasks.forEach(task => {
        this.originalTasks.push(task);
      });
    }
  }
}
