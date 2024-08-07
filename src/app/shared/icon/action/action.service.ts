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
      icon: 'road',
      title: 'Travel',
    },
    {
      id: 'Service',
      color: 'dark-green',
      icon: 'motorcycle',
      title: 'Service',
    },
    {
      id: 'Food',
      color: 'pink',
      icon: 'cutlery',
      title: 'Food',
    },
    {
      id: 'Medicine',
      color: 'red',
      icon: 'medkit',
      title: 'Medicine',
    },
    {
      id: 'Hotel',
      color: 'brown',
      icon: 'bed',
      title: 'Hotel',
    },
    {
      id: 'Electricity',
      color: 'light-blue',
      icon: 'plug',
      title: 'Electricity',
    },
    {
      id: 'Film',
      color: 'green',
      icon: 'film',
      title: 'Film',
    },
    {
      id: 'Shop',
      color: 'yellow',
      icon: 'shopping-bag',
      title: 'Shop',
    },
    {
      id: 'Education',
      color: 'purple',
      icon: 'graduation-cap',
      title: 'Education',
    },
    {
      id: 'Garden',
      color: 'orange',
      icon: 'leaf',
      title: 'Garden',
    },
  ];
  public getActions() {
    return this.actionsList;
  }
}
