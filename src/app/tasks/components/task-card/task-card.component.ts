import {Component, Input} from '@angular/core';
import {Task} from '../../interfaces/task.interface'
import {FormBuilder, FormGroup} from "@angular/forms";
import {TasksService} from "../../service/tasks.service";
import {Router} from "@angular/router";
import {TasksListComponent} from "../../pages/tasks-list/tasks-list.component";

@Component({
  selector: 'tasks-task-card',
  templateUrl: './task-card.component.html',
  styles: [
  ]
})
export class TaskCardComponent {

  @Input()
  public task!: Task;
  public currentTask!: Task;

  constructor(private _formBuilder: FormBuilder,
              private _tasksService: TasksService,
              private _taskList: TasksListComponent) {
  }

  public taskForm: FormGroup = this._formBuilder.group({
    title: [''],
    detail: ['']
  });

  get editedTask(): Task {
    return this.taskForm.value;
  }

  onEdit() {

  }

  public onDelete(id: string): void {
    this._tasksService.deleteTask(id)
      .subscribe(task => {
        this._taskList.ngOnInit()
      });
  }

  setEdit(id: string): void {
    this._tasksService.taskById(id)
      .subscribe(task => {
        this.currentTask = task;
        console.log(this.currentTask)
      });
  }
}
