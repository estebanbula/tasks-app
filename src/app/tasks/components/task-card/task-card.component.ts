import {Component, Input} from '@angular/core';
import {Task} from '../../interfaces/task.interface'

@Component({
  selector: 'tasks-task-card',
  templateUrl: './task-card.component.html',
  styles: [
  ]
})
export class TaskCardComponent {

  @Input()
  public task!: Task;

}
