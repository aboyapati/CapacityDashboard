import { Routes } from '@angular/router';

import { ForgotComponent } from './forgot/forgot.component';
import { LoadingComponent } from './loading/loading.component';
import {LockScreenComponent} from './lock-screen/lock-screen.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: './login/login.module#LoginModule',
        data: {
          breadcrumb: 'Login'
        }
      },
      {
        path: 'forgot',
        component: ForgotComponent,
        data: {
          breadcrumb: 'Forgot'
        }
      },
      {
        path: 'loading',
        component: LoadingComponent,
        data: {
          breadcrumb: 'Loading'
        }
      },
      {
      path: 'lock-screen',
      component: LockScreenComponent,
        data: {
          breadcrumb: 'Lock Screen'
        }
    }]
  }
];
