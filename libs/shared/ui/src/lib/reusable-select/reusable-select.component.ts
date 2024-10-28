import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BaseSelect } from '@cms-monoripo/types';

@Component({
  selector: 'lib-reusable-select',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './reusable-select.component.html',
  styleUrl: './reusable-select.component.css',
})
export class ReusableSelectComponent implements AfterViewInit {

  @Input() selectProps!:BaseSelect;
  @Output() valueChange = new EventEmitter<unknown>();

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  optionClicked(){
    this.valueChange.emit();
  }

}
