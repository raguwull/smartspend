import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-trend',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.css', '.././graphs.component.css'],
})
export class TrendComponent {}
