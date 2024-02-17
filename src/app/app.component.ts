import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoItem } from './interfaces/todo-item';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, InputButtonUnitComponent, TodoItemComponent],
  templateUrl : 'app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  addItem(title: string):void{
    this.todoList.push({title: title });
  }
  title = 'todo-list';
  todoList :TodoItem [] = [//indiquer que les élement de la liste todoListe sont de type du Objet TodoItem
    {title : 'install Node js'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];
}

