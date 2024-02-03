import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-button-unit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent {
  title = 'Hello World';

  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }
  
  getInputValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}