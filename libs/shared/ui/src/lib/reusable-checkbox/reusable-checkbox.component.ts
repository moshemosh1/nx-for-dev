import { Component, Input } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BaseCheckbox } from '@cms-monoripo/types';
('');

@Component({
  selector: 'lib-reusable-checkbox',
  standalone: true,
  imports: [MatCheckboxModule],
  templateUrl: './reusable-checkbox.component.html',
  styleUrl: './reusable-checkbox.component.css',
})
export class ReusableCheckboxComponent {
  @Input() checkboxProps!: BaseCheckbox;
}
