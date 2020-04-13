import { Injectable } from '@angular/core';
import { Todo } from '../../interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private url = 'http://localhost:3000/todos';
  constructor(private http: HttpClient) {}
  getTodos(): Observable<Array<Todo>> {
    return this.http.get<Array<Todo>>(`${this.url}`);
  }
  deleteTodo(todoId: Number): Observable<Array<Todo>> {
    return this.http.delete<Array<Todo>>(`${this.url}/${todoId}`);
  }
}
// {
//   "id": 2,
//   "title": "JS",
//   "description": "Test",
//   "isDone": true
// }
