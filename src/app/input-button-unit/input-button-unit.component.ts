import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-button-unit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent {
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  title = 'Enter';

  submitValue(newTitle :string): void {
    this.submit.emit(newTitle);
    // this.title = newTitle ;
  }
   
  getInputValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

 
}