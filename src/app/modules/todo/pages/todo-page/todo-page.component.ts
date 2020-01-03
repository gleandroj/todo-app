import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../../../../models/todo.model';
import { Store } from '@ngrx/store';
import { RootStoreState } from 'src/app/root-store/state';
import { selectTodoData, selectTodoLoading, selectTodoError } from 'src/app/root-store/todo-feature/todo.selectors';
import { Observable } from 'rxjs';
import { fetchTodo } from 'src/app/root-store/todo-feature/todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

  public todos$: Observable<TodoModel[]>;
  public loading$: Observable<boolean>;
  public error$: Observable<any>;

  constructor(private store$: Store<RootStoreState>) {
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

}
