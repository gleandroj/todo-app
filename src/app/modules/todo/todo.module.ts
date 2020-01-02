import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { TodoLayoutComponent } from './components/todo-layout/todo-layout.component';

@NgModule({
  declarations: [
    TodoPageComponent,
    TodoLayoutComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
