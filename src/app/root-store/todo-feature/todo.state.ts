import { TodoModel } from '../../../app/models/todo.model';

export const TodoStateKey = 'todo-feature';

export interface State {
    data: TodoModel[],
    loading: boolean,
    error: any
};

export interface FeatureState {
    todo: State
}
