import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './todo.effects';
import { TodoStateKey, todoReducer } from './todo.reducer';

@NgModule({
    imports: [
        StoreModule.forFeature(TodoStateKey, { todo: todoReducer }),
        EffectsModule.forFeature([TodoEffects])
    ]
})
export class TodoFeatureStoreModule { }
