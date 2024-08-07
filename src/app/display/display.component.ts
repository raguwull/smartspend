import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css',
})
export class DisplayComponent {}
