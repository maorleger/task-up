// Service module imports
import { TasksService } from '../../services/services.module'

// Local folder imports
import { TaskListComponent } from './task-list.component';

describe('TaskListComponent', () => {

  let underTest: TaskListComponent;

  const testTasks = ['task1', 'task2'];
  const tasksServiceStub = {
    getTasks(): Promise<string[]> { throw new Error(); },
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

  describe('editButton Click handler', () => {
    it('toggles the isEditing state', () => {
      underTest.setEditMode(false);
      underTest.onEditButtonClicked();
      expect(underTest.isInEditMode).toBeTruthy();
    })
  });

  describe('cancelButton click handler', () => {
    beforeEach(() => {
      underTest.tasks = testTasks;
      underTest.setEditMode(true);
      underTest.tasks = underTest.tasks.map(task => task + 'edited');
      underTest.onCancelButtonClicked();
    });

    it('reverts to read-only mode', () => {
      expect(underTest.isInEditMode).toEqual(false);
    });

    it('restores the original task values', () => {
      expect(underTest.tasks).toEqual(testTasks);
      expect(underTest.originalTasks).toEqual([]);
    });
  });

  describe('saveButton click handler', () => {
    beforeEach(() => {
      underTest.tasks = testTasks;
      underTest.setEditMode(true);
      underTest.tasks = underTest.tasks.map(task => task + 'edited');
      underTest.onSaveButtonClicked();
    });

    it('reverts to read-only mode', () => {
      expect(underTest.isInEditMode).toEqual(false);
    });

    it('keeps the edited tasks saved', () => {
      expect(underTest.tasks).toEqual(['task1edited', 'task2edited']);
      expect(underTest.originalTasks).toEqual([]);
    });

  });

});
