//Angular imports
import { Component, OnInit } from '@angular/core';

//Service module imports
import { TasksService } from '../../services/services.module';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  providers: [TasksService],
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

	tasks: string[];

	constructor(private taskService: TasksService) { }

	ngOnInit() {

		this.taskService.getTasks().then((result) => {
			this.tasks = result;
		});

	}

}
