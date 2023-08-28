import {Component, OnInit} from '@angular/core';
import {Task} from "../../interfaces/task.interface";
import {TasksService} from "../../service/tasks.service";
import {tap} from "rxjs";

@Component({
  templateUrl: './tasks-list.component.html',
  styles: []
})
export class TasksListComponent implements OnInit {

  public tasks: Task[] = [];

  constructor(private _tasksService: TasksService) {
  }

  ngOnInit(): void {
    this._tasksService.getTasks()
      .pipe(
        tap(task => console.log(task))
      )
      .subscribe(tasks => this.tasks = this.toSorted(tasks));
  }

  private toSorted(task: Task[]): Task[] {
    return task.sort((a, b) => (b.created > b.created) ? 1 : -1);
  }

}
