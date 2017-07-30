import { TasksService } from './tasks.service';
import { Task } from '../library/task';

describe('tasks', () => {
  let tasksService: TasksService;
  const testTasks = [new Task(null), new Task(null)];

  beforeEach(() => {
    tasksService = new TasksService();
    tasksService.tasks = testTasks;
  });

  it('should return a promise', () => {
    expect(tasksService.getTasks().constructor.name).toEqual('ZoneAwarePromise');
  });

  describe('resolving', () => {
    it('returns an array of tasks', () => {
      tasksService.getTasks().then(tasks => expect(tasks).toEqual(testTasks));
    });
  });
});
