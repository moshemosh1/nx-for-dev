import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BaseButton } from '@cms-monoripo/types';

@Component({
  selector: 'lib-reusable-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './reusable-button.component.html',
  styleUrl: './reusable-button.component.css',
})
export class ReusableButtonComponent {
  @Input() buttonProps!: BaseButton;
}
