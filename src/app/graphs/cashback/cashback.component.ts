import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cashback',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cashback.component.html',
  styleUrls: ['./cashback.component.css', '.././graphs.component.css'],
})
export class CashbackComponent {}
