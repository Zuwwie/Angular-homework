import { Component, OnInit, Input } from '@angular/core';
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

  isShowDetails = false;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  toggleDetails(): void {
    this.isShowDetails = !this.isShowDetails;
  }
  deleteTodo(todoId: Number): void {
    this.todoService.deleteTodo(todoId).subscribe((data) => {
      console.log(data);
    });
  }
}
