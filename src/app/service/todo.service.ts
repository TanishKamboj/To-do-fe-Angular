import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetResultObject, ToDoTask, addTaskInterface, getPostObject } from '../todo.interface';
import { Observable } from 'rxjs';

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

  postTaskList(requestData: addTaskInterface): Observable<getPostObject> {
    return this.http.post<getPostObject>('/api/todo', requestData)
  }
}
