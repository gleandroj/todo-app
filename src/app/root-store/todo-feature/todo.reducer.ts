import { createReducer, on } from '@ngrx/store';
import { fetchTodo, fetchTodoError, fetchTodoSuccess } from './todo.actions';
import { TodoModel } from '../../models/todo.model';

export const TodoStateKey = 'todo-feature';

export interface TodoSate {
    data: TodoModel[],
    loading: boolean,
    error: any
};

const TodoError = (msg: string) => ({ message: msg });

const defaultError = TodoError(`Falha na comunicação com a API.`);

export const initialState: TodoSate = {
    data: [],
    loading: false,
    error: null
};

const _todoReducer = createReducer(initialState,
    on(fetchTodo, (state) => ({ ...state, loading: true })),
    on(fetchTodoSuccess, (state, { payload }) => ({ ...state, loading: false, data: payload })),
    on(fetchTodoError, (state) => ({ ...state, loading: false, error: defaultError }))
);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}
