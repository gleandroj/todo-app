import { Component, OnInit } from '@angular/core';
import { Menu, menus } from '../../todo.menus';

@Component({
  selector: 'app-todo-layout',
  templateUrl: './todo-layout.component.html',
  styleUrls: ['./todo-layout.component.scss']
})
export class TodoLayoutComponent implements OnInit {

  public menus: Menu[] = menus;

  constructor() { }

  ngOnInit() {
  }

}
