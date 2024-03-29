import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputButtonUnitComponent } from '../input-button-unit/input-button-unit.component';
import { TodoItem } from '../interfaces/todo-item';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-list-manager',
  standalone: true,
  imports: [CommonModule, InputButtonUnitComponent, TodoItemComponent],
  templateUrl: './list-manager.component.html',
  styleUrl: './list-manager.component.scss'
})
export class ListManagerComponent {
  todoList :TodoItem [];
  
  constructor(private todoListService: TodoListService){
    this.todoList = this.todoListService.getTodoList();
  }

addItem(title: string):void{
  this.todoList.push({ title });
}

removeItem(item: TodoItem): void {
  this.todoListService.deleteItem(item);
}

updateItem(item: TodoItem, changes: any): void {
  this.todoListService.updateItem(item, changes);
}

}
