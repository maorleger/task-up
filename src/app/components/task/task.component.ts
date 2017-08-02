import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

import{
    Task
} from '../../library/task'

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  host: {
      '(document:click)': 'onClick($event)'
  }
})
export class TaskComponent implements OnInit {

  private _task: Task;

  @ViewChild('checkbox', {read: ElementRef})
  checkbox: ElementRef

  // isInEditMode: boolean;

  @Output()
  taskChange = new EventEmitter();

  @Input()
  set task(val: Task){
    this._task = val;
    this.taskChange.emit(this._task);
  }

  get task(): Task{
    return this._task;
  }

  constructor(private selfRef: ElementRef) {
    // this.isInEditMode = false;
  }

  ngOnInit() {
  }

  onClick(event) {
    this.task.isInEditMode =
      this.selfRef.nativeElement.contains(event.target) &&
      !(this.checkbox && this.checkbox.nativeElement.contains(event.target));

  }

}
