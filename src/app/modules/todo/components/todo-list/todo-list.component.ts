import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { TodoModel } from '../../../../models/todo.model';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() public data: TodoModel[] = [];
  @Input() public loading: boolean = false;
  @ViewChild(CdkVirtualScrollViewport, { static: true }) public viewPort: CdkVirtualScrollViewport;
  @Output() todoClick: EventEmitter<TodoModel> = new EventEmitter();

  public itemSize = 90;

  constructor() { }

  get maxViewItens() {
    const size = Math.floor(this.viewPort.getViewportSize() / this.itemSize);
    return size > 0 ? (new Array(size)).fill(() => { }) : [];
  }

  ngOnInit() {
  }

}
