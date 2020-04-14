import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';
import { transition } from '@angular/animations';
import { TodoService } from 'src/app/core/services/todo/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<Todo>();

  isShowDetails = false;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  toggleTodo(): void {
    this.todo.isDone = !this.todo.isDone;
    this.update.emit(this.todo);
  }

  toggleDetails(): void {
    this.isShowDetails = !this.isShowDetails;
  }
  deleteTodo(todoId: number): void {
    this.delete.emit(todoId);
  }
}
