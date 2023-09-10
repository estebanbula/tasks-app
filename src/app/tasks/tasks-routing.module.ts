import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TasksListComponent} from "./pages/tasks-list/tasks-list.component";
import {AddTaskComponent} from "./components/add-task/add-task.component";
import {EditTaskComponent} from "./components/edit-task/edit-task.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: TasksListComponent
      },
      {
        path: 'add',
        component: AddTaskComponent
      },
      {
        path: 'edit/:id',
        component: EditTaskComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
