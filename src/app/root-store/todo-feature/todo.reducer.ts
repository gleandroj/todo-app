import { createReducer, on, ActionReducerMap } from "@ngrx/store";
import { TodoModel } from "src/app/models/todo.model";
import {
  fetchTodo,
  fetchTodoError,
  fetchTodoSuccess,
  saveTodo,
  saveTodoSuccess,
  saveTodoError,
  saveTodoReset,
  deleteTodoSuccess,
  deleteTodo,
  deleteTodoError,
} from "./todo.actions";
import {
  FeatureState,
  initialTodoState,
  initialTodoFormState,
} from "./todo.state";

const TodoError = (msg: string) => ({ message: msg });
const defaultError = TodoError(`Falha na comunicação com a API.`);

const _todoReducer = createReducer(
  initialTodoState,
  on(fetchTodo, (state) => ({ ...state, loading: true })),
  on(fetchTodoSuccess, (state, { payload }) => ({
    ...state,
    loading: false,
    data: payload,
  })),
  on(saveTodoSuccess, (state, { todo }) => ({
    ...state,
    loading: false,
    data: [todo as TodoModel, ...state.data.filter((t) => t._id !== todo._id)],
  })),
  on(deleteTodoSuccess, (state, { todo }) => ({
    ...state,
    loading: false,
    data: state.data.filter((t) => t._id !== todo._id),
  })),
  on(fetchTodoError, (state) => ({
    ...state,
    loading: false,
    error: defaultError,
  }))
);

const _todoFormReducer = createReducer(
  initialTodoFormState,
  on(saveTodo, deleteTodo, (state) => ({
    ...state,
    error: null,
    loading: true,
  })),
  on(saveTodoSuccess, deleteTodoSuccess, () => initialTodoFormState),
  on(saveTodoError, deleteTodoError, (state) => ({
    ...state,
    loading: false,
    error: defaultError,
  })),
  on(saveTodoReset, () => initialTodoFormState)
);

export function todoFormReducer(state, action) {
  return _todoFormReducer(state, action);
}

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}

export const reducers: ActionReducerMap<FeatureState> = {
  todo: todoReducer,
  form: todoFormReducer,
};
