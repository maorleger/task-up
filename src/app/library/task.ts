// Service module imports
import { TasksService } from '../services/services.module';

export class Task {
  description: string;
  _completed: boolean;
  isInEditMode: boolean;

  set completed(val: boolean){
    this._completed = val;

    if (this._completed) {
      this.taskService.saveTask(this.description);
    }
  }

  get completed(): boolean{
    return this._completed
  }

  constructor(private taskService: TasksService) {}

}
