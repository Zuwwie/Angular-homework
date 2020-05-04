import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/core/interfaces';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { TodosComponent } from '../todos.component';
import { TodoService } from 'src/app/core/services/todo/todo.service';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss'],
})
export class NewTodoComponent implements OnInit {
  // @Output() newTodo = new EventEmitter<Todo>()
  // todo: any;
  mytodo: Todo;
  // todoList: Array<Todo>;
  newTodoForm: FormGroup;
  isSumbit = false;
  // test: string;
  // List: Array<any>;
  // item: any = {
  //   toString() {
  //     return this.id;
  //   },
  // };
  // todo1: string;

  constructor(private fb: FormBuilder, private modalRef: BsModalRef) {}

  ngOnInit(): void {
    // this.editNewRodoForm();

    this.createNewRodoForm();
  }
  onSubmit(): void {
    // console.log(this.newTodoForm.value);
    this.isSumbit = true;

    if (this.newTodoForm.invalid) {
      return;
    }

    this.submit(this.newTodoForm.value);
    // this.newTodo.emit(this.newTodoForm.value);
    console.log(this.newTodoForm.value);

    this.hideModal();
    this.isSumbit = false;

    this.newTodoForm.reset();
  }

  hideModal() {
    this.modalRef.hide();
  }

  private createNewRodoForm(): void {
    console.log(this.mytodo);
    this.newTodoForm = this.fb.group({
      id: [this.mytodo ? this.mytodo.id : null],
      title: [
        this.mytodo ? this.mytodo.title : ` `,
        [Validators.required, Validators.minLength(3)],
      ],
      description: [
        this.mytodo ? this.mytodo.description : null,
        [Validators.minLength(5), Validators.required],
      ],
      priority: [this.mytodo ? this.mytodo.priority : `Low`],
    });
  }
  submit(todo: Todo): void {}
}
