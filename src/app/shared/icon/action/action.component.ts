import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActionMenu } from './action.model';
import { ActionIconComponent } from '../action-icon/action-icon.component';

@Component({
  selector: 'app-action',
  standalone: true,
  imports: [ActionIconComponent],
  templateUrl: './action.component.html',
  styleUrl: './action.component.css',
})
export class ActionComponent {
  @Input() action!: ActionMenu;
  @Output() emitAction = new EventEmitter();
  onClick() {
    this.emitAction.emit(this.action);
  }
}
