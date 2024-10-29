import { Component, Input } from '@angular/core';
import {
  MatProgressSpinnerModule,
  ProgressSpinnerMode,
} from '@angular/material/progress-spinner';
import { BaseLoader } from '@cms-monoripo/types';

@Component({
  selector: 'lib-reusable-loader',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './reusable-loader.component.html',
  styleUrl: './reusable-loader.component.css',
})
export class ReusableLoaderComponent {
  @Input() loaderProps!: BaseLoader;
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
}
