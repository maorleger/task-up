import { TasksService } from './tasks.service';

describe('tasks', () => {
  let tasksService: TasksService;
  const testTasks = ['Task1', 'Task2'];
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
