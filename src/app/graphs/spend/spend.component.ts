import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-spend',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './spend.component.html',
  styleUrls: ['./spend.component.css', '.././graphs.component.css'],
})
export class SpendComponent {}
