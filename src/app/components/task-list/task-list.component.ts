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
  }

  ngOnInit() {
    this.taskService.getTasks().then((result) => {
      this.tasks = result;
    });
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }
}
