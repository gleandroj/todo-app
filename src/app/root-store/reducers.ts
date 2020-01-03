import { MetaReducer, ActionReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';
import * as Todo from './todo-feature';

export interface State {
    [Todo.TodoStateKey]: Todo.FeatureState
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function (state: State, action: any): State {
        const newState = reducer(state, action);
        console.log('action', action.type);
        console.log('new state', JSON.stringify(newState));
        return newState;
    };
}

export const metaReducers: MetaReducer<{}>[] = !environment.production
    ? [logger]
    : [];
