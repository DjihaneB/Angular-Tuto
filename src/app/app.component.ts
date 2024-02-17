import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoItem } from './interfaces/todo-item';
import { ListManagerComponent } from './list-manager/list-manager.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, InputButtonUnitComponent, TodoItemComponent, ListManagerComponent],
  templateUrl : 'app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'My To-Do List App';
  
}

