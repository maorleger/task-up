// Service module imports
import { TasksService } from '../services/services.module';

//Local folder imports
import { Task } from './task'


describe('Task', () => {

    let underTest: Task;

      const tasksServiceStub = {
        saveTask(id: string): Promise<boolean> { throw new Error(); }
      }

    beforeEach(() => {

        underTest = new Task(tasksServiceStub as TasksService);

        spyOn(tasksServiceStub, "saveTask").and.callFake(() => {
            return Promise.resolve(true)
        });

    });

    it('saves', () => {

        underTest.completed = true;

        expect(tasksServiceStub.saveTask).toHaveBeenCalled();
        expect(underTest.completed).toBeTruthy();

    });

});