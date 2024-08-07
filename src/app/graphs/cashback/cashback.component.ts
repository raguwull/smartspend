import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cashback',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './cashback.component.html',
  styleUrls: ['./cashback.component.css', '.././graphs.component.css'],
})
export class CashbackComponent {}
