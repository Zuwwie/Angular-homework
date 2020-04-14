import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/core/interfaces';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss'],
})
export class NewTodoComponent implements OnInit {
  @Output() newTodo = new EventEmitter<Todo>();

  newTodoForm: FormGroup;
  isSumbit = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createNewRodoForm();
  }
  onSubmit(): void {
    this.isSumbit = true;

    if (this.newTodoForm.invalid) {
      return;
    }

    this.newTodo.emit(this.newTodoForm.value);

    this.newTodoForm.reset();
    this.isSumbit = false;
  }
  private createNewRodoForm(): void {
    this.newTodoForm = this.fb.group({
      title: [null, [Validators.required, Validators.minLength(3)]],
      description: [null, [Validators.minLength(5), Validators.required]],
      isDone: [false],
    });
  }
}
