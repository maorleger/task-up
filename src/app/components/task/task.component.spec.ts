import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';

import { TaskComponent } from './task.component';
import { Task } from '../../library/task';
import { TasksService } from '../../services/tasks.service';

describe('TaskComponent', () => {

  let underTest: TaskComponent;

  function initTaskComponent(ref) {
    underTest = new TaskComponent(ref);
    underTest.task = new Task(new TasksService());
  }

  beforeEach(() => {
    const selfRef: ElementRef = {
      nativeElement: {
        contains: (x) => x === 1
      }
    }
    initTaskComponent(selfRef);
  });

  describe('task setter', () => {
    it('properly sets the task variable', () => {
      const testTask = new Task(null);
      testTask.description = 'eric gets it done';
      underTest.task = testTask;
      expect(underTest.task).toEqual(testTask);
    });
  });

  describe('onClick', () => {
    it('sets isInEditMode when clicking on the text', () => {
      underTest.onClick({target: 1});
      expect(underTest.task.isInEditMode).toBeTruthy();

      underTest.onClick({target: 2});
      expect(underTest.task.isInEditMode).toBeFalsy();
    });

    it('does not set isInEditMode when clicking a checkbox', () => {
      const selfRef: ElementRef = {
        nativeElement: {
          contains: x => true
        }
      }
      initTaskComponent(selfRef);
      underTest.checkbox = {
        nativeElement: {
          contains: x => x !== 1
        }
      };
      underTest.onClick({target: 2});
      expect(underTest.task.isInEditMode).toBeFalsy();
    });
  });

  describe('clicking the checkbox', () => {
    it('toggles between complete and incomplete correctly', () => {
      underTest.task.completed = false;
      underTest.checkboxChecked({stopPropagation: () => {}});
      expect(underTest.task.completed).toBeTruthy();
      underTest.checkboxChecked({stopPropagation: () => {}});
      expect(underTest.task.completed).toBeFalsy();
    });
  });
});
