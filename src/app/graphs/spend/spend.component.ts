import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-spend',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './spend.component.html',
  styleUrls: ['./spend.component.css', '.././graphs.component.css'],
})
export class SpendComponent {}
