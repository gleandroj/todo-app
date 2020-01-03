import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TodoModel } from 'src/app/models/todo.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-todo-form-dialog',
  templateUrl: './todo-form-dialog.component.html',
  styleUrls: ['./todo-form-dialog.component.scss']
})
export class TodoFormDialogComponent implements OnInit {
  public form: FormGroup;
  public priorities = [null, 1, 2, 3, 4, 5];//TODO: Put inside model

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private todo: Partial<TodoModel>
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      _id: [this.todo._id],
      title: [this.todo.title],
      description: [this.todo.description],
      priority: [this.todo.priority],
      createdAt: [this.todo.createdAt],
      isDone: [this.todo.isDone]
    });
  }

}
