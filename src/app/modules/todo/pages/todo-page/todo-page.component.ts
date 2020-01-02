import { Component, OnInit } from '@angular/core';
import { Todo } from '../../todo';

const bigDescription = (new Array(100))
  .fill(() => { }).map((a, i) => `${i}`).join('');

const testData = (new Array(10))
  .fill(() => { })
  .map((a, i) => (new Todo(`Todo ${++i}`, `Description ${i} ${bigDescription}`, 5, new Date(), false)));

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

  public todos: Todo[] = testData;

  constructor() { }

  ngOnInit() {
  }

}
