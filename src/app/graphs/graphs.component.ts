import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-graphs',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './graphs.component.html',
  styleUrl: './graphs.component.css',
})
export class GraphsComponent {}
