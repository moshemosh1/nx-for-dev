import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BaseInput } from '@cms-monoripo/types';
import { merge } from 'rxjs';

@Component({
  selector: 'lib-reusable-input',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './reusable-input.component.html',
  styleUrl: './reusable-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReusableInputComponent {
  @Input() inputProps!: BaseInput;
  @Output() valueChange = new EventEmitter<string>();

  changeValue() {
    this.valueChange.emit();
  }

  errorMessage = signal('');

  constructor() {
    merge(
      this.inputProps?.form.statusChanges,
      this.inputProps?.form.valueChanges
    )
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    this.inputProps?.validators?.forEach((validator) => {
      if (this.inputProps.form.hasError(validator)) {
        this.errorMessage.set(`You have an error : ${validator}`);
      }
    });
  }
}
