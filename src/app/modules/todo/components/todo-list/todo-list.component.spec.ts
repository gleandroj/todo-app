import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TodoComponent } from '../todo/todo.component';
import { MatIconModule } from '@angular/material/icon';
import { TodoLoadingComponent } from '../todo-loading/todo-loading.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ScrollingModule,
        MatIconModule,
        MatCheckboxModule,
        MatCardModule
      ],
      declarations: [TodoListComponent, TodoComponent, TodoLoadingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
