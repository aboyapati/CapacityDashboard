import { Routes } from '@angular/router';
import { ReloadComponent } from './reload.component';

export const ReloadRoutes: Routes = [{
    path: '',
    component: ReloadComponent,
    data: {
        breadcrumb: 'Reload'
    }
}];
