import { Component } from '@angular/core';
import { WeeklyReportComponent } from "../weekly-report/weekly-report.component";
import { InvoiceComponent } from "../shared/invoice/invoice.component";
import { SpendComponent } from "../graphs/spend/spend.component";
import { CashbackComponent } from "../graphs/cashback/cashback.component";
import { TrendComponent } from "../graphs/trend/trend.component";
import { QuickactionsComponent } from "../quickactions/quickactions.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [WeeklyReportComponent, InvoiceComponent, SpendComponent, CashbackComponent, TrendComponent, QuickactionsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
