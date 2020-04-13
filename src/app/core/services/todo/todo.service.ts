import { Injectable } from '@angular/core';
import { Todo } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}
  getTodoData(): Array<Todo> {
    return [
      {
        id: 1,
        title: `Angular`,
        description: `123`,
        isDone: false,
      },
      {
        id: 2,
        title: `JS`,
        description: `Test`,
        isDone: true,
      },
    ];
  }
}
