import { Routes } from '@angular/router';
import {ProvisioningComponent} from './provisioning.component';

export const ProvisioningRoutes: Routes = [{
    path: '',
    component: ProvisioningComponent,
    data: {
        breadcrumb: 'Provisioning'
    }
}];
