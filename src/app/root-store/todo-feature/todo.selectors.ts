import { MemoizedSelector, createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoStateKey } from './todo.reducer';
import { TodoFeatureState } from './state';

const selectTodoFeatureState: MemoizedSelector<
    object,
    TodoFeatureState
> = createFeatureSelector<TodoFeatureState>(TodoStateKey);
const selectTodoState = (state: TodoFeatureState) => state.todo;
const selectTodo = createSelector(selectTodoFeatureState, selectTodoState);

export const selectTodoData = createSelector(selectTodo, (state) => state.data);
export const selectTodoLoading = createSelector(selectTodo, (state) => state.loading);
export const selectTodoError = createSelector(selectTodo, (state) => state.error);