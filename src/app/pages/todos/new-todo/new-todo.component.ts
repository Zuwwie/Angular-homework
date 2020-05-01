import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/core/interfaces';
import { BsModalRef } from 'ngx-bootstrap/modal';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss'],
})
export class NewTodoComponent implements OnInit {
  // @Output() newTodo = new EventEmitter<Todo>();

  newTodoForm: FormGroup;
  isSumbit = false;
  test: string;

  constructor(private fb: FormBuilder, private modalRef: BsModalRef) {}

  ngOnInit(): void {
    this.createNewRodoForm();
  }
  onSubmit(): void {
    this.isSumbit = true;

    if (this.newTodoForm.invalid) {
      return;
    }

    this.submit(this.newTodoForm.value);
    // this.newTodo.emit(this.newTodoForm.value);

    this.newTodoForm.reset();
    this.isSumbit = false;
    this.hideModal();
  }

  hideModal() {
    this.modalRef.hide();
  }

  private createNewRodoForm(): void {
    this.newTodoForm = this.fb.group({
      title: [null, [Validators.required, Validators.minLength(3)]],
      description: [null, [Validators.minLength(5), Validators.required]],
      priority: ['Low'],
      // isDone: [false]
    });
  }
  submit(todo: Todo): void {}
}
