import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TasksListComponent} from "./pages/tasks-list/tasks-list.component";
import {AddTaskComponent} from "./components/add-task/add-task.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: TasksListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
