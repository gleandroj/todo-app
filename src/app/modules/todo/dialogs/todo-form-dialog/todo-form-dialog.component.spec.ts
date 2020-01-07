import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { TodoFormDialogComponent } from './todo-form-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { provideMockStore, } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject, of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoEffects, TodoStateKey, initialTodoState, initialTodoFormState } from './../../../../root-store/todo-feature';


describe('TodoFormDialogComponent', () => {
  let component: TodoFormDialogComponent;
  let fixture: ComponentFixture<TodoFormDialogComponent>;
  let actions$: ReplaySubject<any>;
  let dialogMock = {
    beforeClose: () => of({})
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatNativeDateModule,
        HttpClientTestingModule,
        MatDialogModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatProgressBarModule,
        MatSelectModule,
        ReactiveFormsModule
      ],
      declarations: [TodoFormDialogComponent],
      providers: [
        TodoEffects,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: dialogMock },
        provideMockStore({ initialState: { [TodoStateKey]: { form: initialTodoFormState } } }),
        provideMockActions(actions$)
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
