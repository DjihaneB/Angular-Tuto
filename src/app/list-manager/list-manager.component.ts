import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputButtonUnitComponent } from '../input-button-unit/input-button-unit.component';
import { TodoItem } from '../interfaces/todo-item';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-list-manager',
  standalone: true,
  imports: [CommonModule, InputButtonUnitComponent, TodoItemComponent],
  templateUrl: './list-manager.component.html',
  styleUrl: './list-manager.component.scss'
})
export class ListManagerComponent {
  todoList :TodoItem [] = [//indiquer que les élement de la liste todoListe sont de type du Objet TodoItem
  {title : 'install Node js'},
  {title: 'install Angular CLI'},
  {title: 'create new app'},
  {title: 'serve app'},
  {title: 'develop app'},
  {title: 'deploy app'},
];

addItem(title: string):void{
  this.todoList.push({title: title });
}

}
