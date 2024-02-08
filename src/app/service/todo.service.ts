import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetResultObject, ToDoTask } from '../todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  taskData: ToDoTask[] = [];

  getTaskList(): ToDoTask[] {
    this.http.get<GetResultObject>('/api/todo/tasks').subscribe(
      (res) => {
        this.taskData = res.data
      }
    );
    return this.taskData;
  }
}
