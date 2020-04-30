import { Component, OnInit, TemplateRef } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';
import { TodoService } from 'src/app/core/services/todo/todo.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NewTodoComponent } from './new-todo/new-todo.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todoList: Array<Todo>;
  search: string;
  modalRef: BsModalRef;

  constructor(
    private todoService: TodoService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.getTodos();
  }
  openModal() {
    this.modalRef = this.modalService.show(
      NewTodoComponent,
      Object.assign(
        {},
        {
          class: 'gray modal-lg',
          initialState: {
            submit: this.addTodo.bind(this),
          },
        }
      )
    );
  }

  updateTodo(todo: Todo): void {
    this.todoService.updateTodo(todo).subscribe(() => {
      this.getTodos();
    });
  }

  deleteTodo(todoId: number): void {
    this.todoService.deleteTodo(todoId).subscribe(() => {
      this.getTodos();
    });
  }
  addTodo(todo: Todo): void {
    this.todoService.addTodo(todo).subscribe(() => {
      this.getTodos();
    });
  }
  sortToDO(word: string) {
    this.todoService.sortTodo(word).subscribe(
      (data) => {
        this.todoList = data;
      },
      (error) => {}
    );
  }

  private getTodos(): void {
    this.todoService.getTodos().subscribe(
      (data) => {
        this.todoList = data;
      },
      (error) => {}
    );
  }
}
