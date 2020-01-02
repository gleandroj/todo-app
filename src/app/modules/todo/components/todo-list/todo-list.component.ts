import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() public data: Todo[] = [];

  constructor() { }

  ngOnInit() {
  }

}
