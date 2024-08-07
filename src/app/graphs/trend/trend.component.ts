import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-trend',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.css', '.././graphs.component.css'],
})
export class TrendComponent {}
