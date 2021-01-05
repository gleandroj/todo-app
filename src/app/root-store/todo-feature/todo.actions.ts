import { createAction, props } from "@ngrx/store";
import { TodoModel } from "../../models/todo.model";

export enum TodoActions {
  FETCH_TODO = "[Todo API] Fetch todo",
  FETCH_TODO_SUCCESS = "[Todo API] Fetch todo success",
  FETCH_TODO_ERROR = "[Todo API] Fetch todo error",

  SAVE_TODO = "[Todo API] Save todo",
  SAVE_TODO_SUCCESS = "[Todo API] Save todo success",
  SAVE_TODO_ERROR = "[Todo API] Save todo error",
  SAVE_TODO_RESET = "[Todo State] Save todo reset",

  DELETE_TODO = "[Todo API] Delete todo",
  DELETE_TODO_SUCCESS = "[Todo API] Delete todo success",
  DELETE_TODO_ERROR = "[Todo API] Delete todo error",
}

export const fetchTodo = createAction(
  TodoActions.FETCH_TODO,
  props<{ filter?: Partial<TodoModel> }>()
);

export const fetchTodoSuccess = createAction(
  TodoActions.FETCH_TODO_SUCCESS,
  props<{ payload: TodoModel[] }>()
);

export const fetchTodoError = createAction(TodoActions.FETCH_TODO_ERROR);

export const saveTodo = createAction(
  TodoActions.SAVE_TODO,
  props<{ todo: Partial<TodoModel> }>()
);

export const saveTodoSuccess = createAction(
  TodoActions.SAVE_TODO_SUCCESS,
  props<{ todo: Partial<TodoModel> }>()
);

export const saveTodoError = createAction(TodoActions.SAVE_TODO_ERROR);

export const saveTodoReset = createAction(TodoActions.SAVE_TODO_RESET);

export const deleteTodo = createAction(
  TodoActions.DELETE_TODO,
  props<{ todo: TodoModel }>()
);

export const deleteTodoSuccess = createAction(
  TodoActions.DELETE_TODO_SUCCESS,
  props<{ todo: TodoModel }>()
);

export const deleteTodoError = createAction(TodoActions.DELETE_TODO_ERROR);
