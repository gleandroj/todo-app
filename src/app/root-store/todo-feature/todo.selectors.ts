import { MemoizedSelector, createFeatureSelector, createSelector } from '@ngrx/store';
import * as TodoState from './todo.state';

const selectTodoFeatureState: MemoizedSelector<
    object,
    TodoState.FeatureState
> = createFeatureSelector<TodoState.FeatureState>(TodoState.TodoStateKey);

export const selectTodo = createSelector(selectTodoFeatureState, (state: TodoState.FeatureState) => state.todo);
export const selectTodoForm = createSelector(selectTodoFeatureState, (state: TodoState.FeatureState) => state.form);

export const selectTodoData = createSelector(selectTodo, (state) => state.data);
export const selectTodoLoading = createSelector(selectTodo, (state) => state.loading);
export const selectTodoError = createSelector(selectTodo, (state) => state.error);

export const selectTodoFormLoading = createSelector(selectTodoForm, (state) => state.loading);
export const selectTodoFormError = createSelector(selectTodoForm, (state) => state.error);
