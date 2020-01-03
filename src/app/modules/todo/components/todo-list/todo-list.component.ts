import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
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

  public itemSize = 90;

  constructor() { }

  get maxViewItens() {
    const size = Math.floor(this.viewPort.getViewportSize() / this.itemSize);
    return (new Array(size)).fill(() => { });
  }

  ngOnInit() {
  }

}
