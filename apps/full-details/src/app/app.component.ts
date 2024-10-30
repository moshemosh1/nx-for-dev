import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  BaseAutocomplete,
  BaseButton,
  BaseCheckbox,
  BaseGrid,
  BaseInput,
  BaseLoader,
  BaseRadioButton,
  BaseSelect,
  BaseTable,
  inputTypes,
} from '@cms-monoripo/types';
import {
  DictDisplayComponent,
  ReusableAutocompleteComponent,
  ReusableButtonComponent,
  ReusableCheckboxComponent,
  ReusableInputComponent,
  ReusableLoaderComponent,
  ReusableRadioButtonsComponent,
  ReusableSelectComponent,
  ReusableTableComponent,
} from '@cms-monoripo/ui';
import { NxWelcomeComponent } from './nx-welcome.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    ReusableTableComponent,
    ReusableSelectComponent,
    ReusableAutocompleteComponent,
    RouterModule,
    ReusableInputComponent,
    ReusableButtonComponent,
    ReusableCheckboxComponent,
    ReusableLoaderComponent,
    ReusableRadioButtonsComponent,
    DictDisplayComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'full-details';
  test: BaseTable = {
    data: ELEMENT_DATA,
    columns: ['position', 'name', 'weight', 'symbol'],
  };

  optionClicked() {
    // console.log(this.select.form);
    // console.log(this.input.form);
    console.log('button clicked');
  }

  radioClicked(val: BaseRadioButton) {
    console.log({ val });
  }

  select: BaseSelect = {
    options: [
      { value: 'Extra cheese', key: 'ExtraCheese' },
      { value: 'Mushroom', key: 'Mushroom' },
      { value: 'Onion', key: 'Onion' },
      { value: 'Pepperoni', key: 'Pepperoni' },
      { value: 'Sausage', key: 'Sausage' },
      { value: 'Tomato', key: 'Tomato' },
    ],
    label: 'Toppings',
    multiple: true,
    form: new FormControl(''),
  };

  auto: BaseAutocomplete = {
    options: [
      'Extra cheese',
      'Mushroom',
      'Onion',
      'Pepperoni',
      'Sausage',
      'Tomato',
    ],
    label: 'Toppings',
    form: new FormControl(''),
  };

  input: BaseInput = {
    label: 'input',
    form: new FormControl('', [
      Validators.required,
      Validators.max(5),
      Validators.min(0),
    ]),
    isTextarea: false,
    type: inputTypes.number,
    validators: ['required', 'max', 'min'],
  };

  textarea: BaseInput = {
    label: 'textarea',
    form: new FormControl('', [Validators.email, Validators.required]),
    isTextarea: true,
    type: inputTypes.email,
    validators: ['required', 'email'],
  };

  button: BaseButton = {
    text: 'click',
    isDisabled: false,
    clickEvent: this.optionClicked,
  };

  checkbox: BaseCheckbox = {
    text: 'choose me',
    clickEvent: () => console.log('checkbox clicked'),
    disabled: false,
  };

  loader: BaseLoader = {
    mode: 'determinate',
    value: 20,
  };

  radioButtons: BaseRadioButton[] = [
    {
      value: Math.random().toString(),
      text: 'option 1',
      clickEvent: this.radioClicked,
    },
    {
      value: Math.random().toString(),
      text: 'option 2',
      clickEvent: this.radioClicked,
    },
    {
      value: Math.random().toString(),
      text: 'option 3',
      clickEvent: this.radioClicked,
    },
  ];

  grig: BaseGrid = {
    cols: 2,
    rowHeight: '2:1',
    components: [],
  };

  dict: Record<string, string> = {
    a: 'a',
    b: 'b',
  };
}
