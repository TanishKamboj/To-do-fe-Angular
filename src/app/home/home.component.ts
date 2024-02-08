import { Component } from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card.component';
import { TodoService } from '../service/todo.service';
import { ToDoTask } from '../todo.interface';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  taskList: ToDoTask[] = [];
  constructor(private todoService: TodoService) {
    this.taskList = this.todoService.getTaskList();
  }


}
