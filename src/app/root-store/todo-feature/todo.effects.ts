import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, mergeMap, catchError } from "rxjs/operators";
import { TodoService } from "../../services/todo.service";
import {
  fetchTodoSuccess,
  fetchTodoError,
  fetchTodo,
  saveTodo,
  saveTodoSuccess,
  saveTodoError,
  deleteTodo,
  deleteTodoSuccess,
  deleteTodoError,
} from "./todo.actions";

@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchTodo),
      mergeMap((action) =>
        this.todoService.getAll(action.filter).pipe(
          switchMap((data) => of(fetchTodoSuccess({ payload: data }))),
          catchError(() => of(fetchTodoError()))
        )
      )
    )
  );

  saveTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveTodo),
      mergeMap((action) =>
        this.todoService.save(action.todo).pipe(
          switchMap((todo) => of(saveTodoSuccess({ todo }))),
          catchError(() => of(saveTodoError()))
        )
      )
    )
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTodo),
      mergeMap(({ todo }) =>
        this.todoService.delete(todo).pipe(
          switchMap(() => of(deleteTodoSuccess({ todo }))),
          catchError(() => of(deleteTodoError()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private todoService: TodoService) {}
}
