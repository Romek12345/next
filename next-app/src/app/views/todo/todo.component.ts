import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoItem } from './todo-item/shared/todo-item.model';
import { TodoService } from './shared/todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todoList: TodoItem[] = [];
  todoForm!: FormGroup;
  constructor(private todoService: TodoService, private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.loadTodoList();
    this.todoForm = this.createTodoForm();
  }
  private createTodoForm(): FormGroup {
    return this.formBuilder.group({
      description: ['', Validators.required],
      isDone: [false]
    });
  }
  private loadTodoList(): void {
    this.todoService.getTodoList().then((todoList: TodoItem[]) => {
      this.todoList = todoList;
      console.log('this.todoList', this.todoList);
    });
  }
  addTodo(): void {
    this.todoService.addTodoItem(this.todoForm.value).then(() => {
      this.todoService.getTodoList();
      this.todoForm.reset();
    });
  }
  removeTodo(id: number): void {
    this.todoService.removeTodoItem(id).then(() => this.loadTodoList());
  }
}