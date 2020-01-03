import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { distinctUntilChanged, debounceTime, tap } from 'rxjs/operators';
import { TodoModel } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.scss']
})
export class TodoFilterComponent implements OnInit, OnDestroy {

  public priorities = [null, 1, 2, 3, 4, 5];
  public form: FormGroup;

  @Input() public debounceTime: number = 500;

  @Output() public filter: EventEmitter<Partial<TodoModel>> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: [],
      description: [],
      priority: [],
      createdAt: [],
      isDone: []
    });

    this.form.valueChanges
      .pipe(
        debounceTime(this.debounceTime),
        distinctUntilChanged(),
        untilDestroyed(this),
        tap((value) => this.filter.emit(value))
      ).subscribe();
  }

  ngOnDestroy(): void { }

  reset(event?: MouseEvent) {
    if (event) event.stopImmediatePropagation();
    if (this.form.dirty) this.form.reset({});
  }
}
