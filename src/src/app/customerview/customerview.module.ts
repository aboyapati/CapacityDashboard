import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { CustomerviewComponent } from './customerview.component';
import {CustomerviewRoutes} from './customerview.routing';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CustomerviewRoutes),
    SharedModule
  ],
  declarations: [CustomerviewComponent]
})
export class CustomerviewModule { }
