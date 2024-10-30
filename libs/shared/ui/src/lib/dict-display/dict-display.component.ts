import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-dict-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dict-display.component.html',
  styleUrl: './dict-display.component.scss',
})
export class DictDisplayComponent {
  @Input() dict!: Record<any, any>;
}
