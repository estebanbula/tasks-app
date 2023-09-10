import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Task} from '../../interfaces/task.interface'
import {ActivatedRoute, Router} from "@angular/router";
import {tap} from "rxjs";

@Component({
  selector: 'tasks-edit-task',
  templateUrl: './edit-task.component.html',
  styles: []
})
export class EditTaskComponent implements OnInit {

  public taskForm: FormGroup = this._formBuilder.group({
    title: [''],
    detail: [''],
    created: [''],
    state: ['']
  });

  constructor(private _formBuilder: FormBuilder) {
  }

  @Input()
  public task!: Task;

  ngOnInit() {
    console.log(this.task)
  }

  onEdit() {

  }
}
