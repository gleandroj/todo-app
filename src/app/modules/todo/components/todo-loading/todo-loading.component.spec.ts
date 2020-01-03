import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoLoadingComponent } from './todo-loading.component';

describe('TodoLoadingComponent', () => {
  let component: TodoLoadingComponent;
  let fixture: ComponentFixture<TodoLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoLoadingComponent ]
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
