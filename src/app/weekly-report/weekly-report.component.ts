import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActionService } from '../shared/icon/action/action.service';
import { ActionMenu } from '../shared/icon/action/action.model';
import { ActionComponent } from '../shared/icon/action/action.component';
import { ActionIconComponent } from "../shared/icon/action-icon/action-icon.component";

@Component({
  selector: 'app-weekly-report',
  standalone: true,
  imports: [CurrencyPipe, ActionComponent, ActionIconComponent],
  templateUrl: './weekly-report.component.html',
  styleUrl: './weekly-report.component.css',
})
export class WeeklyReportComponent implements OnInit {
  arr = ['Games', 'Home', 'Gas'];
  actionService = inject(ActionService);
  allActions = this.actionService.getActions();
  usedActions!: ActionMenu[];
  ngOnInit(): void {
    console.log(this.allActions);
  }
}
