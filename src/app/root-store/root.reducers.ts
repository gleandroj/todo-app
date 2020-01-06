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

const MOBILE_MAX_WIDTH = 425;
const TABLET_MAX_WIDTH = 1024;

const _screenReducer = createReducer<ScreenState>(initialScreenState,
    on(setScreen, (state, { width }) => {
        const tablet = width <= TABLET_MAX_WIDTH && width > MOBILE_MAX_WIDTH;
        const mobile = width <= MOBILE_MAX_WIDTH;
        return {
            desktop: !mobile && !tablet,
            tablet,
            mobile
        };
    })
);

export function screenReducer(state, action) {
    return _screenReducer(state, action);
}

export const reducers: ActionReducerMap<State> = {
    screen: screenReducer
};