import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './todo.effects';
import { TodoStateKey } from './todo.state';
import { reducers } from './todo.reducer';

@NgModule({
    imports: [
        StoreModule.forFeature(TodoStateKey, reducers),
        EffectsModule.forFeature([TodoEffects])
    ]
})
export class TodoFeatureStoreModule { }
