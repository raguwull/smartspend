import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActionComponent } from '../shared/icon/action/action.component';
import { ActionService } from '../shared/icon/action/action.service';
import { ActionMenu } from '../shared/icon/action/action.model';
import { ActionIconComponent } from '../shared/icon/action-icon/action-icon.component';

@Component({
  selector: 'app-new-expense',
  standalone: true,
  imports: [RouterLink, ActionComponent, ActionIconComponent],
  templateUrl: './new-expense.component.html',
  styleUrl: './new-expense.component.css',
})
export class NewExpenseComponent {
  submitted = false;
  selectedAction: string = 'Please select a category';
  actionService = inject(ActionService);
  actionsList: ActionMenu[] = this.actionService.getActions();
  onAction(action: ActionMenu) {
    this.selectedAction = action.title;
    console.log(action);
  }
}
