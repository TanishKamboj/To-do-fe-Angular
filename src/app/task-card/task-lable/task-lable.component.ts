import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-lable',
  standalone: true,
  imports: [],
  templateUrl: './task-lable.component.html',
  styleUrl: './task-lable.component.css'
})
export class TaskLableComponent {

  @Input() priorityLevel!: number;
  @Input() taskProgress!: string;
}
