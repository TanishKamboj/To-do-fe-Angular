import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-crud-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crud-card.component.html',
  styleUrl: './crud-card.component.css'
})
export class CrudCardComponent {

  @Input() showAddTask !: boolean;
  @Output() showTaskChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('registrationForm') form !: NgForm;

  constructor(private todoService: TodoService) { }

  todayDate = new Date();
  defaultStatus = "Pending";
  defaultTag = "Programming";
  onCloseClick() {
    this.showAddTask = !this.showAddTask;
    this.showTaskChanged.emit(false);
  }
  onFormSubmit() {
    const reqBody = {
      title: this.form.value.name,
      description: this.form.value.taskDescription,
      priorityLevel: this.form.value.priority,
      status: this.form.value.status,
      dueDate: this.form.value.dueDate,
      Tags: [this.form.value.tags]
    }
    this.todoService.postTaskList(reqBody).subscribe((res) => {
      console.log(res);
    });
  }
}
