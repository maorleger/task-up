import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  host: {
      '(document:click)': 'onClick($event)'
  }
})
export class TaskComponent implements OnInit {

  private _task: string;

  @ViewChild('checkbox', {read: ElementRef})
  checkbox: ElementRef

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

  constructor(private selfRef: ElementRef) {
    this.isInEditMode = false;
  }

  ngOnInit() {
  }

  onClick(event) {
    this.isInEditMode =
      this.selfRef.nativeElement.contains(event.target) &&
      !(this.checkbox && this.checkbox.nativeElement.contains(event.target));

  }

}
