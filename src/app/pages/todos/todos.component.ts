import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';
import { TodoService } from 'src/app/core/services/todo/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todoList: Array<Todo>;

  constructor(private todoService: TodoService) {
    this.todoService.getTodos().subscribe(
      (data) => {
        this.todoList = data;
      },
      (error) => {}
    );
    // this.todoList = this.todoService.getTodoData();
  }

  ngOnInit(): void {}
}
