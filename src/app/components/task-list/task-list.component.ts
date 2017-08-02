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
  isInEditMode: boolean;

  constructor(private taskService: TasksService) {
  }

  ngOnInit() {
    this.taskService.getTasks().then((result) => {
      this.tasks = result;
    });
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  addTask(event) {
    event.stopPropagation();
    const task = this.taskService.addTask();
    this.ngOnInit();
    // const task = new Task(this.taskService);
    // task.isInEditMode = true;
    // this.tasks.push(task);
  }
}
