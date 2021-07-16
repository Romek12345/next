import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from './shared/todo-item.model';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: TodoItem | undefined;
  @Input()
  isFirst!: boolean;
  @Output() removeItem: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }
  ngOnInit(): void {
  }
  removeTodo(id: number, ev: { stopPropagation: () => void; }): void {
    ev.stopPropagation();
    this.removeItem.emit(id);
  }
}