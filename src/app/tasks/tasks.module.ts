import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TasksRoutingModule} from './tasks-routing.module';
import {TasksListComponent} from './pages/tasks-list/tasks-list.component';
import {TaskCardComponent} from './components/task-card/task-card.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EditTaskComponent } from './components/edit-task/edit-task.component';


@NgModule({
  declarations: [
    TasksListComponent,
    TaskCardComponent,
    AddTaskComponent,
    EditTaskComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    ReactiveFormsModule
  ]
})
export class TasksModule { }
