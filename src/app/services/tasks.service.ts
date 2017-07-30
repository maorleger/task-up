// Angular imports
import {Injectable } from '@angular/core'

import { Task } from '../library/task'

@Injectable()
export class TasksService {
  tasks: Task[] = [
    new Task(this),
    new Task(this)
  ].map(function(task, i) {
    task.description = 'Task ' + (i + 1);
    task.completed = i % 2 === 0;
    return task;
  });

  getTasks(): Promise<Task[]> {
    return Promise.resolve(this.tasks);
  }

  saveTask(id: string): Promise<boolean> {
    return Promise.resolve(true);
  }
}
