import { CanDeactivateFn, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChartsComponent } from './charts/charts.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ProfileComponent } from './profile/profile.component';
import { NewExpenseComponent } from './new-expense/new-expense.component';
import { MonthlyActivitiesComponent } from './monthly-activities/monthly-activities.component';
import { NotificationsComponent } from './notifications/notifications.component';

export const canLeaveNewExpensePage: CanDeactivateFn<NewExpenseComponent> = (
  component
) => {
  if (component.submitted) {
    return true;
  } else {
    return window.confirm('Your changes will be lost. Leave this page?');
  }
};

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'prefix',
  },
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'charts',
        component: ChartsComponent,
      },
      {
        path: 'invoices',
        component: InvoicesComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'new-expense',
        component: NewExpenseComponent,
        canDeactivate: [canLeaveNewExpensePage],
      },
      {
        path: 'monthly-activities',
        component: MonthlyActivitiesComponent,
      },
      {
        path: 'notifications',
        component: NotificationsComponent,
      },
    ],
  },
];
