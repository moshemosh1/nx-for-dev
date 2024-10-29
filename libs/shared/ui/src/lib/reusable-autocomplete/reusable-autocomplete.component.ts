import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BaseAutocomplete } from '@cms-monoripo/types';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'lib-reusable-autocomplete',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    AsyncPipe,
  ],
  templateUrl: './reusable-autocomplete.component.html',
  styleUrl: './reusable-autocomplete.component.css',
})
export class ReusableAutocompleteComponent implements OnInit {
  @Input() selectProps!: BaseAutocomplete;
  @Output() valueChange = new EventEmitter<unknown>();
  filteredOptions!: Observable<string[]>;

  ngOnInit(): void {
    this.filteredOptions = this.selectProps.form.valueChanges.pipe(
      startWith(''),
      map((value: string) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.selectProps.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  optionClicked() {
    this.valueChange.emit();
  }
}
