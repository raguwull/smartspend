import { Component, inject } from '@angular/core';
import { ActionService } from '../shared/icon/action/action.service';
import { ActionMenu } from '../shared/icon/action/action.model';
import { ActionComponent } from "../shared/icon/action/action.component";

@Component({
  selector: 'app-quickactions',
  standalone: true,
  imports: [ActionComponent],
  templateUrl: './quickactions.component.html',
  styleUrl: './quickactions.component.css',
})
export class QuickactionsComponent {
  actionService = inject(ActionService);
  actionsList: ActionMenu[] = this.actionService.getActions();
}
