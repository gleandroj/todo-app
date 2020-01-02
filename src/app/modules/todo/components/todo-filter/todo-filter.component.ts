import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.scss']
})
export class TodoFilterComponent implements OnInit {

  public priorities = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit() {
  }

}
