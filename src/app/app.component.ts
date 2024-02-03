import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, InputButtonUnitComponent],
//   template: `
//   <h1>
//   Welcome to {{ title }}!
// </h1>`,
templateUrl : 'app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo-list';
  name = "takima";
}

