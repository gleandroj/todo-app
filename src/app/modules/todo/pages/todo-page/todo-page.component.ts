import { Component, OnInit, OnDestroy } from '@angular/core';
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
import { MatDialog } from '@angular/material/dialog';
import { TodoFormDialogComponent } from '../../dialogs/todo-form-dialog/todo-form-dialog.component';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit, OnDestroy {

  public todos$: Observable<TodoModel[]>;
  public loading$: Observable<boolean>;
  public error$: Observable<any>;

  constructor(
    private store$: Store<RootStore.State>,
    private mdDialog: MatDialog
  ) {
    this.loading$ = this.store$.select(selectTodoLoading);
    this.todos$ = this.store$.select(selectTodoData);
    this.error$ = this.store$.select(selectTodoError);
  }

  ngOnInit() {
    this.store$.dispatch(fetchTodo({}));
  }

  filter(filter: Partial<TodoModel>) {
    this.store$.dispatch(fetchTodo({ filter }));
  }

  todoClick(todo: TodoModel) {
    const ref = this.mdDialog.open(TodoFormDialogComponent, {
      data: todo
    });
  }

  addTodo() {
    const ref = this.mdDialog.open(TodoFormDialogComponent, {
      data: {}
    });
  }

  ngOnDestroy(): void { }

}
