import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TodoPageComponent } from './todo-page.component';
import { TodoFilterComponent } from '../../components/todo-filter/todo-filter.component';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatNativeDateModule } from '@angular/material/core';
import { TodoLoadingComponent } from '../../components/todo-loading/todo-loading.component';
import { TodoComponent } from '../../components/todo/todo.component';
import { MatCardModule } from '@angular/material/card';
import { provideMockStore } from '@ngrx/store/testing';
import { TodoStateKey, initialTodoState } from '../../../../root-store/todo-feature';

describe('TodoPageComponent', () => {
  let component: TodoPageComponent;
  let fixture: ComponentFixture<TodoPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        MatNativeDateModule,
        ScrollingModule,
        BrowserAnimationsModule,
        MatCheckboxModule,
        MatIconModule,
        MatExpansionModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatCardModule
      ],
      declarations: [
        TodoPageComponent,
        TodoFilterComponent,
        TodoListComponent,
        TodoLoadingComponent,
        TodoComponent
      ],
      providers: [
        provideMockStore({ initialState: { [TodoStateKey]: { todo: initialTodoState } } }),
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
