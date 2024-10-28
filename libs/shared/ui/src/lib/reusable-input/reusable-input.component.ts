import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-reusable-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reusable-input.component.html',
  styleUrl: './reusable-input.component.css',
})
export class ReusableInputComponent {}
