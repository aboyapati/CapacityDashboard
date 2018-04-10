import { Routes } from '@angular/router';
import {CustomerviewComponent} from './customerview.component';

export const CustomerviewRoutes: Routes = [{
    path: '',
    component: CustomerviewComponent,
    data: {
        breadcrumb: ''
    }
}];
