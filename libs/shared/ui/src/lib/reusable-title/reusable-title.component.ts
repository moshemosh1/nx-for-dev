import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-reusable-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reusable-title.component.html',
  styleUrl: './reusable-title.component.css',
})
export class ReusableTitleComponent {}
