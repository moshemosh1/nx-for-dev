import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {
  ReusableSelectComponent,
  ReusableTableComponent,
  UiComponent,
  ReusableAutocompleteComponent,
} from '@cms-monoripo/ui';
import { BaseAutocomplete, BaseSelect, BaseTable } from '@cms-monoripo/types';
import { FormControl } from '@angular/forms';

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
    UiComponent,
    ReusableTableComponent,
    ReusableSelectComponent,
    ReusableAutocompleteComponent,
    RouterModule,
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
    console.log(this.select.form);
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
}
