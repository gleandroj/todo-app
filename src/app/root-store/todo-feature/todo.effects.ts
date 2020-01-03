import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, mergeMap, catchError } from 'rxjs/operators';
import { TodoService } from '../../services/todo.service';
import { fetchTodoSuccess, fetchTodoError, fetchTodo } from './todo.actions';
import { of } from 'rxjs';

@Injectable()
export class TodoEffects {

    loadTodos$ = createEffect(() => this.actions$.pipe(
        ofType(fetchTodo),
        mergeMap(() => this.todoService.getAll().pipe(
            switchMap(data => of(fetchTodoSuccess({ payload: data }))),
            catchError(() => of(fetchTodoError()))
        )))
    );

    constructor(
        private actions$: Actions,
        private todoService: TodoService
    ) { }
}