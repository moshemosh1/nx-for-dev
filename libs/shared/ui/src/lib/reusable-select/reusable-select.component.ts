import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BaseSelect } from '@cms-monoripo/types';

@Component({
  selector: 'lib-reusable-select',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './reusable-select.component.html',
  styleUrl: './reusable-select.component.css',
})
export class ReusableSelectComponent {
  @Input() selectProps!: BaseSelect;
  @Output() valueChange = new EventEmitter<unknown>();

  optionClicked() {
    this.valueChange.emit();
  }
}
