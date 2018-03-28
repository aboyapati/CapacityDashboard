import { Routes } from '@angular/router';
import {DatacenterComponent} from './datacenter/datacenter.component';

export const DataRoutes: Routes = [
    {
        path: '',
        data: {
            breadcrumb: 'Data Components',
            status: false
        },
        children: [
            {
                path: 'datacenter/:dataCenterId',
                component: DatacenterComponent,
                data: {
                    breadcrumb: 'Datacenter page',
                    status: true
                }
            }
        ]
    }
];
