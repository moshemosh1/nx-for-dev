import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-reusable-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reusable-button.component.html',
  styleUrl: './reusable-button.component.css',
})
export class ReusableButtonComponent {}
