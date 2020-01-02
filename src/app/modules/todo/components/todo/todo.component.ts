import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() public todo: Todo;

  constructor() { }

  ngOnInit() {
  }

}
