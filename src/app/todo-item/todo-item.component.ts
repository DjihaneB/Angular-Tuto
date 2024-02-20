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

  @Input() item!: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();

  removeItem(): void {
    this.remove.emit(this.item);
  }

  completeItem(): void {
    if (this.item !== undefined) {
      const newCompletedState = !this.item.completed;
      this.update.emit({
        item: this.item,
        changes: { completed: newCompletedState }
      });
    }
  }
   
}
