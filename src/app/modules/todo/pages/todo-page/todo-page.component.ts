import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoModel } from '../../../../models/todo.model';
import {
  selectTodoData,
  selectTodoLoading,
  selectTodoError,
  fetchTodo
} from '../../../../../app/root-store/todo-feature';
import * as RootStore from '../../../../../app/root-store';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

  public todos$: Observable<TodoModel[]>;
  public loading$: Observable<boolean>;
  public error$: Observable<any>;

  constructor(private store$: Store<RootStore.State>) {
    this.loading$ = this.store$.select(selectTodoLoading);
    this.todos$ = this.store$.select(selectTodoData);
    this.error$ = this.store$.select(selectTodoError);
  }

  ngOnInit() {
    this.store$.dispatch(fetchTodo({}));
  }

  filter(filter: Partial<TodoModel>) {
    this.store$.dispatch(fetchTodo({ filter: filter }))
  }

  todoClick(todo: TodoModel) {
    //this.store$.dispatch(editTodo(todo))
  }

}
