import { Injectable } from '@angular/core';
import { ActionMenu } from './action.model';

@Injectable({
  providedIn: 'root',
})
export class ActionService {
  private actionsList: ActionMenu[] = [
    {
      id: 'Home',
      color: 'red',
      icon: 'home',
      title: 'Home',
    },
    {
      id: 'Gas',
      color: 'blue',
      icon: 'car',
      title: 'Gas',
    },
    {
      id: 'Security',
      color: 'yellow',
      icon: 'key',
      title: 'Security',
    },
    {
      id: 'Videos',
      color: 'light-blue',
      icon: 'camera',
      title: 'Videos',
    },
    {
      id: 'Games',
      color: 'orange',
      icon: 'gamepad',
      title: 'Games',
    },

    {
      id: 'Travel',
      color: 'purple',
      icon: 'car',
      title: 'Travel',
    },
    {
      id: 'Service',
      color: 'dark-green',
      icon: 'bicycle',
      title: 'Service',
    },
  ];
  public getActions() {
    return this.actionsList;
  }
}
