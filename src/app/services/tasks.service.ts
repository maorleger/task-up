export class TasksService {
  tasks: string[] = [
    'Task1',
    'Task2'
  ];
  getTasks(): Promise<string[]> {
    return Promise.resolve(this.tasks);
  }
}
