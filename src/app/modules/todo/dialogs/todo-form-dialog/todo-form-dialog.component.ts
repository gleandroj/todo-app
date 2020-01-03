import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TodoModel, todoPriorities } from 'src/app/models/todo.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-todo-form-dialog',
  templateUrl: './todo-form-dialog.component.html',
  styleUrls: ['./todo-form-dialog.component.scss']
})
export class TodoFormDialogComponent implements OnInit {
  public form: FormGroup;
  public priorities = todoPriorities;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public todo: Partial<TodoModel>
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      _id: [this.todo._id],
      title: [this.todo.title, [Validators.required]],
      description: [this.todo.description, []],
      priority: [this.todo.priority, [Validators.required]],
      createdAt: [this.todo.createdAt || new Date()],
      isDone: [this.todo.isDone]
    });

    this.form.get('createdAt').disable();
  }

}
