import { TodoStateKey } from './todo-feature/todo.reducer';
import { TodoFeatureState } from './todo-feature/state';

export interface RootStoreState {
    [TodoStateKey]: TodoFeatureState
};