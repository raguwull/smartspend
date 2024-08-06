import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css',
})
export class DisplayComponent {}
