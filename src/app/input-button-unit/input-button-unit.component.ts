import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-button-unit.component.html',
  styleUrl: './input-button-unit.component.scss'
})
export class InputButtonUnitComponent {
  title = 'Learn about components';
  constructor() { 
    console.log('in constructor');
    this.changeTitle('My First Angular App');
    console.log('title :', this.title);
    
  }
  changeTitle(newTitle: string): void {
    this.title = newTitle;
    console.log(this.title);  }
  

}
