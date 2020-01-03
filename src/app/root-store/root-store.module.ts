import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../environments/environment';

import { TodoFeatureStoreModule } from './todo-feature/todo-feature.module';
import { metaReducers } from './reducers';

@NgModule({
    imports: [
        StoreModule.forRoot({}, { metaReducers: metaReducers }),
        EffectsModule.forRoot([]),
        TodoFeatureStoreModule,
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
    ]
})
export class RootStoreModule { }
