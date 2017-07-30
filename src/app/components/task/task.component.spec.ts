import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';

import { TaskComponent } from './task.component';
import { Task } from '../../library/task';

describe('TaskComponent', () => {

  let underTest: TaskComponent;
  let selfRef: ElementRef;

  beforeEach(() => {
    selfRef = {
      nativeElement: {
        contains: (x) => x === 1
      }
    }
    underTest = new TaskComponent(selfRef);
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
      expect(underTest.isInEditMode).toBeTruthy();

      underTest.onClick({target: 2});
      expect(underTest.isInEditMode).toBeFalsy();
    });

    it('does not set isInEditMode when clicking a checkbox', () => {
      selfRef = {
        nativeElement: {
          contains: x => true
        }
      }
      underTest = new TaskComponent(selfRef);
      underTest.checkbox = {
        nativeElement: {
          contains: x => x !== 1
        }
      };
      underTest.onClick({target: 2});
      expect(underTest.isInEditMode).toBeFalsy();
    });
  });
});
