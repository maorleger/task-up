import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input()
  isInEditMode: boolean;

  @Input()
  task: string;

  constructor() {
    this.isInEditMode = false;
  }

  ngOnInit() {
  }

}
