// Service module imports
import { TasksService } from '../../services/services.module'

// Local folder imports
import { TaskListComponent } from './task-list.component';

describe('TaskListComponent', () => {

  let underTest: TaskListComponent;

    const tasksServiceStub = {
        getTasks(): Promise<string[]> { throw new Error(); },
    }

  beforeEach(() => {
    underTest = new TaskListComponent(tasksServiceStub as TasksService);
  });

  it('fetches list of tasks', done => {

    const testTasks = ['task1', 'task2'];

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

  describe('editButton Click handler', () => {
    it('toggles the isEditing state', () => {
      underTest.setEditMode(false);
      underTest.onEditButtonClicked();
      expect(underTest.isInEditMode).toBeTruthy();
    })
  });

  describe('cancelButton click handler', () => {
    it('cancel button reverts to read-only mode', () => {

        underTest.setEditMode(true);
        underTest.onCancelButtonClicked();

        expect(underTest.isInEditMode).toBeFalsy;

    });
  });

});
