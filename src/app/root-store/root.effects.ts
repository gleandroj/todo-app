import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, withLatestFrom } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { showToast, showToastSuccess, setScreen } from './root.actions';
import { Store } from '@ngrx/store';
import { BreakpointObserver } from '@angular/cdk/layout';
import { State } from './root.reducers';

const MOBILE_MAX_WIDTH = `(max-width: 425px)`;
const TABLET_MAX_WIDTH = `(min-width: 426px) and (max-width: 1024px)`;

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

    resize$ = createEffect(() => this.breakPoint.observe([
        MOBILE_MAX_WIDTH,
        TABLET_MAX_WIDTH
    ]).pipe(
        map(matches => ({
            desktop: !matches.matches,
            tablet: matches.breakpoints[TABLET_MAX_WIDTH],
            mobile: matches.breakpoints[MOBILE_MAX_WIDTH]
        })),
        map(rules => setScreen(rules))
    ));

    constructor(
        private actions$: Actions,
        private store$: Store<State>,
        private snackBar: MatSnackBar,
        private breakPoint: BreakpointObserver
    ) {
    }
}