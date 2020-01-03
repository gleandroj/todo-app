import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { TodoLayoutComponent } from './components/todo-layout/todo-layout.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFilterComponent } from './components/todo-filter/todo-filter.component';
import { TodoLoadingComponent } from './components/todo-loading/todo-loading.component';
import { TodoFormDialogComponent } from './dialogs/todo-form-dialog/todo-form-dialog.component';

@NgModule({
  entryComponents: [TodoFormDialogComponent],
  declarations: [
    TodoPageComponent,
    TodoLayoutComponent,
    TodoComponent,
    TodoListComponent,
    TodoFilterComponent,
    TodoLoadingComponent,
    TodoFormDialogComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ScrollingModule,
    ReactiveFormsModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
