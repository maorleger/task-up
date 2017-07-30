// Service module imports
import { TasksService } from '../../services/services.module'

// Local folder imports
import { TaskListComponent } from './task-list.component';
import { Task } from '../../library/task';

describe('TaskListComponent', () => {

  let underTest: TaskListComponent;

  const testTasks: Task[] = [new Task(null), new Task(null)];
  const tasksServiceStub = {
    getTasks(): Promise<Task[]> { throw new Error(); },
  }

  beforeEach(() => {
    underTest = new TaskListComponent(tasksServiceStub as TasksService);
  });

  it('fetches list of tasks', done => {
    spyOn(tasksServiceStub, 'getTasks').and.callFake(() => {
      return Promise.resolve(testTasks);
    });

    underTest.ngOnInit();

    setTimeout(() => {
      expect(tasksServiceStub.getTasks).toHaveBeenCalled();
      expect(underTest.tasks).toEqual(testTasks);
      done();
    });
  });
});
