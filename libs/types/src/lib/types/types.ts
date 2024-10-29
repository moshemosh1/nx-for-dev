import { FormControl } from '@angular/forms';

export interface BaseTable {
  columns: string[];
  data: any[];
}

export interface BaseSelect {
  label: string;
  options: Option[];
  multiple: boolean;
  form: FormControl;
}

export interface Option {
  key: string;
  value: string;
}

export interface BaseAutocomplete {
  label: string;
  options: string[];
  form: FormControl;
}
