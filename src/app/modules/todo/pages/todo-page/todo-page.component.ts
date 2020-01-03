import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTodoData, selectTodoLoading, selectTodoError } from '../../../../../app/root-store/todo-feature/todo.selectors';
import { fetchTodo } from '../../../../../app/root-store/todo-feature/todo.actions';
import * as RootStore from '../../../../../app/root-store';
import { TodoModel } from '../../../../models/todo.model';

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
    console.log(todo);
  }

}
