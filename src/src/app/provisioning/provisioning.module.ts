import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProvisioningComponent } from './provisioning.component';
import { ProvisioningRoutes } from './provisioning.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ProvisioningRoutes),
        SharedModule
    ],
    declarations: [ProvisioningComponent]
})
export class ProvisioningModule { }
