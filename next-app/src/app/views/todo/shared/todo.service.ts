import { Injectable } from '@angular/core';
import { TODO_LIST } from './todo.mock';
import { TodoItem } from '../todo-item/shared/todo-item.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoList: TodoItem[] = [];
    ids: number[] | undefined;

  constructor() {
    this.todoList = TODO_LIST; 
    this.ids =  this.ids;  
  }

  getTodoList(): Promise<TodoItem[]> {
    return Promise.resolve(this.todoList);
  }

  addTodoItem(todo: TodoItem): Promise<number> {
 

    /*  Wczesniejszy kod - byl problem z ids:
        const ids : number [] =  this.todoList.map(
        (todoItem: TodoItem) => todoItem.id
        ); // [1,2,3]
        let id = Math.max.apply(Math, ids) + 1;
    */
    const ids : number [] = [];
    this.todoList.map(
      (todoItem: TodoItem) => todoItem.id
    ); // [1,2,3]
    let id = Math.max.apply(Math, ids) + 1;

    if (!Number.isFinite(id)) {
      id = 1;
    }

    return Promise.resolve(
      this.todoList.push({
        id,
        ...todo,
      })
    );
  }

  removeTodoItem(id: number): Promise<TodoItem[]> {
    const index: number = this.todoList.findIndex(
      (todoItem: TodoItem) => todoItem.id === id
    );

    return Promise.resolve(this.todoList.splice(index, 1));
  }
}
