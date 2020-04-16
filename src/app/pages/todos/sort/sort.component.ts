import { Component, OnInit, Input, Output } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { TodoService } from 'src/app/core/services/todo/todo.service';
import { TodosComponent } from '../todos.component';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent implements OnInit {
  // @Input() todo: Todo;
  todolist: Array<Todo>;

  // @Output()
  // private url = 'http://localhost:3000/todos';

  z: number;
  constructor(private todosComponent: TodosComponent) {}
  sortTodos() {
    if (this.z < 4) {
      this.z++;
    } else {
      this.z = 1;
    }
    if (this.z === 1) {
      this.todosComponent.sortToDO(``);
    }
    if (this.z === 2) {
      this.todosComponent.sortToDO(`hi`);
    }
    if (this.z === 3) {
      this.todosComponent.sortToDO(`lo`);
    }
    if (this.z === 4) {
      this.todosComponent.sortToDO(`me`);
    }
  }
  ngOnInit(): void {
    this.z = 1;
  }
}
