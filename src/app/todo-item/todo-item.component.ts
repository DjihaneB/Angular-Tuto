import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Input() item!: TodoItem;
  
  removeItem(): void {
    this.remove.emit(this.item);
  }
}
