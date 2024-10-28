import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-reusable-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reusable-loader.component.html',
  styleUrl: './reusable-loader.component.css',
})
export class ReusableLoaderComponent {}
