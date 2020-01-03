import { createReducer, on, ActionReducerMap } from '@ngrx/store';
import { fetchTodo, fetchTodoError, fetchTodoSuccess, saveTodo, saveTodoSuccess, saveTodoError, saveTodoReset } from './todo.actions';
import { FeatureState, initialTodoState, initialTodoFormState } from './todo.state';

const TodoError = (msg: string) => ({ message: msg });
const defaultError = TodoError(`Falha na comunicação com a API.`);

const _todoReducer = createReducer(initialTodoState,
    on(fetchTodo, (state) => ({ ...state, loading: true })),
    on(fetchTodoSuccess, (state, { payload }) => ({ ...state, loading: false, data: payload })),
    on(fetchTodoError, (state) => ({ ...state, loading: false, error: defaultError }))
);

const _todoFormReducer = createReducer(initialTodoFormState,
    on(saveTodo, (state) => ({ ...state, error: null, loading: true })),
    on(saveTodoSuccess, () => initialTodoFormState),
    on(saveTodoError, (state) => ({ ...state, loading: false, error: defaultError })),
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
    form: todoFormReducer
};