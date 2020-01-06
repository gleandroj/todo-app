import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, debounceTime, distinctUntilChanged, startWith, withLatestFrom } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { showToast, showToastSuccess, setScreen } from './root.actions';
import { fromEvent } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from './root.reducers';

@Injectable()
export class RootEffects {

    openToast$ = createEffect(() => this.actions$.pipe(
        ofType(showToast),
        withLatestFrom(this.store$),
        map(([{ message }, { screen }]) => {
            return showToastSuccess({
                ref: this.snackBar.open(message, null, {
                    duration: 3000,
                    verticalPosition: screen.desktop ? "top" : "bottom",
                    horizontalPosition: screen.desktop ? "right" : "center"
                })
            });
        })
    ));

    resize$ = createEffect(() => fromEvent(window, 'resize')
        .pipe(
            debounceTime(200),
            map(() => window.innerWidth),
            distinctUntilChanged(),
            startWith(window.innerWidth),
            map(width => setScreen({ width }))
        )
    );

    constructor(
        private actions$: Actions,
        private store$: Store<State>,
        private snackBar: MatSnackBar
    ) {
    }
}