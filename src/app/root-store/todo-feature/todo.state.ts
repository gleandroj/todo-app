import { TodoModel } from '../../../app/models/todo.model';

export const TodoStateKey = 'todo-feature';

export interface TodoSate {
    data: TodoModel[],
    loading: boolean,
    error: any
};

export interface TodoFormState {
    loading: boolean,
    error: any
};

export interface FeatureState {
    todo: TodoSate,
    form: TodoFormState
}

export const initialTodoState: TodoSate = {
    data: [],
    loading: false,
    error: null
};

export const initialTodoFormState: TodoFormState = {
    loading: false,
    error: null
};
