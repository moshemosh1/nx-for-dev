import { FormControl } from '@angular/forms';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

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

export interface BaseInput {
  label: string;
  placeHolder?: string;
  form: FormControl;
  isTextarea: boolean;
  type: inputTypes;
  validators?: string[];
}

export enum inputTypes {
  number = 'number',
  text = 'text',
  password = 'password',
  email = 'email',
  color = 'color',
  date = 'date',
}

export interface BaseButton {
  isDisabled: boolean;
  icon?: string;
  text?: string;
  clickEvent: () => void;
}

export interface BaseCheckbox {
  text: string;
  disabled: boolean;
  clickEvent: () => void;
}

export interface BaseLoader {
  mode: ProgressSpinnerMode;
  value: number;
}
export interface BaseRadioButton {
  value: string;
  text: string;
  clickEvent: (val: BaseRadioButton) => void;
}

export interface BaseGrid {
  cols: number;
  rowHeight: string | number;
  components: any[];
}
