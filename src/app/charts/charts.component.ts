import { Component } from '@angular/core';
import { WeeklyReportComponent } from '../weekly-report/weekly-report.component';
import { WeeklyExpenseGraphComponent } from '../graphs/weekly-expense-graph/weekly-expense-graph.component';
import { ComparisonTrendGraphComponent } from "../graphs/comparison-trend-graph/comparison-trend-graph.component";
import { MonthlyPiechartGraphComponent } from "../graphs/monthly-piechart-graph/monthly-piechart-graph.component";

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [WeeklyReportComponent, WeeklyExpenseGraphComponent, ComparisonTrendGraphComponent, MonthlyPiechartGraphComponent],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css',
})
export class ChartsComponent {
  displayLegends: boolean = false;
}
