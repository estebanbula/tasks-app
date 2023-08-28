import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {TasksService} from "../../service/tasks.service";
import {Task} from "../../interfaces/task.interface";

@Component({
  selector: 'tasks-add-task',
  templateUrl: './add-task.component.html',
  styles: []
})
export class AddTaskComponent {

  public taskForm: FormGroup = this._formBuilder.group({
    title: [''],
    detail: [''],
    created: [new Date().toUTCString()],
    state: ['A']
  });

  constructor(private _formBuilder: FormBuilder,
              private _taskService: TasksService) {
  }

  get task(): Task {
    return this.taskForm.value as Task;
  }

  public onSave(): void {
    console.log(this.task)
    this._taskService.saveTask(this.task);
  }

}
