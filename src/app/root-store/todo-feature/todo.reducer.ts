import { createReducer, on, ActionReducerMap } from '@ngrx/store';
import { fetchTodo, fetchTodoError, fetchTodoSuccess } from './todo.actions';
import { State, FeatureState } from './todo.state';

const TodoError = (msg: string) => ({ message: msg });

const defaultError = TodoError(`Falha na comunicação com a API.`);

export const initialState: State = {
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

export const reducers: ActionReducerMap<FeatureState> = {
    todo: todoReducer
};