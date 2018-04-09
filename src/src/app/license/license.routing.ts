import { Routes } from '@angular/router';
import {LicenseComponent} from './license.component';

export const LicenseRoutes: Routes = [{
    path: '',
    component: LicenseComponent,
    data: {
        breadcrumb: 'Blank Page'
    }
}];
