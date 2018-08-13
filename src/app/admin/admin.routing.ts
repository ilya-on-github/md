import { Routes } from '@angular/router';
import { SecureComponent } from './components/secure/secure.component';
import { AuthGuard } from '../auth/auth.guard';

export const adminRoutes: Routes = [
  {
    path: '',
    component: SecureComponent,
    canActivate: [
      AuthGuard
    ]
  }
];
