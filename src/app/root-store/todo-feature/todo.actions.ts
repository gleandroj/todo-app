import { createAction, props } from '@ngrx/store';
import { TodoModel } from '../../models/todo.model';

export enum TodoPageActions {
    FETCH_TODO = '[Todo API] Fetch todo',
    FETCH_TODO_SUCCESS = '[Todo API] Fetch todo success',
    FETCH_TODO_ERROR = '[Todo API] Fetch todo error'
}

export const fetchTodo = createAction(
    TodoPageActions.FETCH_TODO
);

export const fetchTodoSuccess = createAction(
    TodoPageActions.FETCH_TODO_SUCCESS,
    props<{ payload: TodoModel[] }>()
);

export const fetchTodoError = createAction(
    TodoPageActions.FETCH_TODO_ERROR
);