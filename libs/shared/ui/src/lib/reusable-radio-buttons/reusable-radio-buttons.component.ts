import { Component, Input } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { BaseRadioButton } from '@cms-monoripo/types';

@Component({
  selector: 'lib-reusable-radio-buttons',
  standalone: true,
  imports: [MatRadioModule],
  templateUrl: './reusable-radio-buttons.component.html',
  styleUrl: './reusable-radio-buttons.component.css',
})
export class ReusableRadioButtonsComponent {
  @Input() radioButtonsProps!: BaseRadioButton[];
}
