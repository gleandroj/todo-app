import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { environment } from '../../environments/environment';
import { TodoFeatureStoreModule } from './todo-feature/todo-feature.module';
import { RootEffects } from './root.effects';
import { metaReducers, reducers } from './root.reducers';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
    imports: [
        MatSnackBarModule,
        LayoutModule,
        StoreModule.forRoot(reducers, { metaReducers: metaReducers }),
        EffectsModule.forRoot([RootEffects]),
        TodoFeatureStoreModule,
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
    ]
})
export class RootStoreModule { }
