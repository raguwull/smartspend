import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActionComponent } from './shared/icon/action/action.component';
import { InvoiceComponent } from './shared/invoice/invoice.component';
import { QuickactionsComponent } from './quickactions/quickactions.component';
import { WeeklyReportComponent } from './weekly-report/weekly-report.component';
import { SpendComponent } from './graphs/spend/spend.component';
import { CashbackComponent } from './graphs/cashback/cashback.component';
import { TrendComponent } from './graphs/trend/trend.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DisplayComponent } from './display/display.component';
import { LastMonthComponent } from './last-month/last-month.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ActionComponent,
    InvoiceComponent,
    QuickactionsComponent,
    WeeklyReportComponent,
    SpendComponent,
    CashbackComponent,
    TrendComponent,
    DashboardComponent,
    HeaderComponent,
    NavbarComponent,
    DisplayComponent,
    LastMonthComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'expense-tracker';
}
