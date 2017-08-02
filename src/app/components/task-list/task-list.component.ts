// Angular imports
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

// Service module imports
import { TasksService } from '../../services/services.module';

//Library imports
import { Task } from '../../library/task'

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  providers: [TasksService],
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  originalTasks: string[];

  constructor(private taskService: TasksService) {
  }

  ngOnInit() {
    this.getTasks();
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  private getTasks() {
    this.taskService.getTasks().then(result => {
      this.tasks = result;
    });
  }

  addTask(event) {
    event.stopPropagation();
    const task = this.taskService.addTask();
    this.getTasks();
  }
}
