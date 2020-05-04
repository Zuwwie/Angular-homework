import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';
import { transition } from '@angular/animations';
import { TodoService } from 'src/app/core/services/todo/todo.service';
import { NewTodoComponent } from '../new-todo/new-todo.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<Todo>();
  todoList: Array<Todo>;

  // @Output() up = new EventEmitter<number>();
  modalRef: BsModalRef;

  isShowDetails = false;

  constructor(
    private todoService: TodoService,
    private modalService: BsModalService
  ) {}

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
  upTodo(): void {
    console.log(this.todo);
    this.modalRef = this.modalService.show(
      NewTodoComponent,
      Object.assign(
        {},
        {
          class: 'gray modal-lg',
          initialState: {
            mytodo: this.todo,
            submit: this.updateTodo.bind(this),
          },
        }
      )
    );
  }
  updateTodo(todo: Todo): void {
    console.log(todo);

    // setTimeout(() => {
    this.update.emit(this.todo);
    // }, 1000);
  }
}

// {
//   "id": 1,
//   "title": "Angular",
//   "description": 123,
//   "isDone": false,
//   "priority": "Low"
// },
// {
//   "id": 2,
//   "title": "JS",
//   "description": "Test",
//   "isDone": false,
//   "priority": "High"
// },
// {
//   "id": 3,
//   "title": "JS",
//   "description": "Test",
//   "isDone": false,
//   "priority": "Medium"
// },
// {
//   "id": 4,
//   "title": "JS",
//   "description": "Test",
//   "isDone": true,
//   "priority": "Low"
// }
