import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  private _task: string;

  @Input()
  isInEditMode: boolean;

  @Output() 
  taskChange = new EventEmitter();

  @Input()
  set task(val: string){
      this._task = val;
      this.taskChange.emit(this._task);
  }

  get task(): string{
      return this._task;
  }

  constructor() {
    this.isInEditMode = false;
  }

  ngOnInit() {
  }


}
