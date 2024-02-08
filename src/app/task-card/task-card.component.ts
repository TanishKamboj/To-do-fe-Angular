import { Component, Input } from '@angular/core';
import { ToDoTask } from '../todo.interface';
import { TaskLableComponent } from './task-lable/task-lable.component';
import { TaskTagLableComponent } from './task-tag-lable/task-tag-lable.component';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [TaskLableComponent, TaskTagLableComponent],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {

  @Input() taskData !: ToDoTask;

}
