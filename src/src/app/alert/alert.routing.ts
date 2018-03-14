import { Routes } from '@angular/router';
import {AlertComponent} from './alert.component';

export const AlertRoutes: Routes = [{
    path: '',
    component: AlertComponent,
    data: {
        breadcrumb: 'Alert'
    }
}];
