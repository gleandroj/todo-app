import { createAction, props } from '@ngrx/store';
import { MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';

export enum RootActions {
    SHOW_TOAST = '[Root UI] Show toast',
    SHOW_TOAST_SUCCESS = '[Root UI] Show toast success',
    SET_SCREEN = '[Root UI] Set screen'
}

export const showToast = createAction(
    RootActions.SHOW_TOAST,
    props<{ message?: string }>()
);

export const showToastSuccess = createAction(
    RootActions.SHOW_TOAST_SUCCESS,
    props<{ ref: MatSnackBarRef<SimpleSnackBar> }>()
);

export const setScreen = createAction(
    RootActions.SET_SCREEN,
    props<{ desktop: boolean; tablet: boolean; mobile: boolean; }>()
);