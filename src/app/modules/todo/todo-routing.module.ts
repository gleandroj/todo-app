import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { TodoLayoutComponent } from './components/todo-layout/todo-layout.component';

const routes: Routes = [
  {
    path: '',
    component: TodoLayoutComponent,
    children: [
      {
        path: '',
        component: TodoPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
