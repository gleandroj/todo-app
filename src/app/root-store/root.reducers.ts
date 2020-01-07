import { MetaReducer, ActionReducer, ActionReducerMap, createReducer, on } from '@ngrx/store';

import { environment } from '../../environments/environment';
import * as Todo from './todo-feature';
import { setScreen } from './root.actions';

export interface ScreenState {
    mobile: boolean,
    tablet: boolean,
    desktop: boolean
};

export interface State {
    [Todo.TodoStateKey]?: Todo.FeatureState,
    screen: ScreenState
};

export const initialScreenState: ScreenState = {
    desktop: false,
    mobile: false,
    tablet: false
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function (state: State, action: any): State {
        const newState = reducer(state, action);
        const { type, ...params } = action;
        console.log('action', type, params);
        return newState;
    };
}

export const metaReducers: MetaReducer<{}>[] = !environment.production
    ? [logger]
    : [];

const _screenReducer = createReducer<ScreenState>(initialScreenState,
    on(setScreen, (rules) => ({ ...rules }))
);

export function screenReducer(state, action) {
    return _screenReducer(state, action);
}

export const reducers: ActionReducerMap<State> = {
    screen: screenReducer
};