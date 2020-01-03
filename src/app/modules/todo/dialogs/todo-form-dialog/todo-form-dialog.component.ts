import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ofType } from '@ngrx/effects';
import { TodoModel, todoPriorities } from '../../../../models/todo.model';
import * as RootStore from '../../../../../app/root-store';
import {
  saveTodo, selectTodoFormLoading, selectTodoFormError, TodoEffects, saveTodoSuccess, saveTodoReset
} from '../../../../../app/root-store/todo-feature';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo-form-dialog',
  templateUrl: './todo-form-dialog.component.html',
  styleUrls: ['./todo-form-dialog.component.scss']
})
export class TodoFormDialogComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public priorities = todoPriorities;
  public loading$: Observable<boolean>;
  public error$: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private store$: Store<RootStore.State>,
    private todoEffects: TodoEffects,
    public dialogRef: MatDialogRef<TodoFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public todo: Partial<TodoModel>
  ) {
    this.loading$ = this.store$.select(selectTodoFormLoading);
    this.error$ = this.store$.select(selectTodoFormError)
      .pipe(map((error) => error && error.message));

    this.dialogRef.beforeClose()
      .pipe(
        untilDestroyed(this)
      ).subscribe(() => this.store$.dispatch(saveTodoReset()))

    this.todoEffects.saveTodo$.pipe(
      ofType(saveTodoSuccess),
      untilDestroyed(this)
    ).subscribe(() => this.dialogRef.close());
  }

  ngOnInit() {
    this.form = this.fb.group({
      _id: [this.todo._id],
      title: [this.todo.title, [Validators.required]],
      description: [this.todo.description, []],
      priority: [this.todo.priority, [Validators.required]],
      createdAt: [this.todo.createdAt || new Date()],
      isDone: [this.todo.isDone]
    });

    this.form.get('createdAt').disable();

    this.loading$
      .pipe(untilDestroyed(this))
      .subscribe(loading => loading ? this.form.disable() : this.form.enable());
  }

  ngOnDestroy() { }

  save() {
    const { value } = this.form;
    const todo = TodoModel.fromObject(value);
    this.store$.dispatch(
      saveTodo({ todo })
    );
  }

}
