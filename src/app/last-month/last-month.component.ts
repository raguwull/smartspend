import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-last-month',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './last-month.component.html',
  styleUrl: './last-month.component.css',
})
export class LastMonthComponent {}
