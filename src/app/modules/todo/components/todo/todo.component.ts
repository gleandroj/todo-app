import { Component, OnInit, Input } from '@angular/core';
import { TodoModel } from '../../../../models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() public todo: TodoModel;

  constructor() { }

  ngOnInit() {
  }

}
