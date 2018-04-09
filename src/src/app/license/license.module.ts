import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { LicenseComponent } from './license.component';
import {LicenseRoutes} from './license.routing';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LicenseRoutes),
    SharedModule
  ],
  declarations: [LicenseComponent]
})
export class LicenseModule { }
