import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActionService } from '../shared/icon/action/action.service';
import { ActionMenu } from '../shared/icon/action/action.model';
import { ActionComponent } from '../shared/icon/action/action.component';
import { ActionIconComponent } from '../shared/icon/action-icon/action-icon.component';
import { WeeklyExpenseGraphComponent } from '../graphs/weekly-expense-graph/weekly-expense-graph.component';

@Component({
  selector: 'app-weekly-report',
  standalone: true,
  imports: [
    CurrencyPipe,
    ActionComponent,
    ActionIconComponent,
    WeeklyExpenseGraphComponent,
  ],
  templateUrl: './weekly-report.component.html',
  styleUrl: './weekly-report.component.css',
})
export class WeeklyReportComponent {
  arr = ['Games', 'Home', 'Gas'];
  actionService = inject(ActionService);
  allActions = this.actionService.getActions().slice(0, 7);
  usedActions!: ActionMenu[];
}
