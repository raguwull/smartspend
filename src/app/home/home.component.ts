import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { LastMonthComponent } from "../last-month/last-month.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, DashboardComponent, LastMonthComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
