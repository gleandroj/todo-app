import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoLoadingComponent } from './todo-loading.component';
import { MatCardModule } from '@angular/material/card';

describe('TodoLoadingComponent', () => {
  let component: TodoLoadingComponent;
  let fixture: ComponentFixture<TodoLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule
      ],
      declarations: [TodoLoadingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
