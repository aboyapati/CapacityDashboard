import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { CustomersRoutes } from './customers.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CustomersRoutes),
    SharedModule
  ],
  declarations: [CustomersComponent]
})
export class CustomersModule { }
