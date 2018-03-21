import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data.component';
import {RouterModule} from '@angular/router';
import {DataRoutes} from './data.routing';
import { DatacenterComponent } from './datacenter/datacenter.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DataRoutes),
    SharedModule
  ],
  declarations: [
    DataComponent,
    DatacenterComponent
  ]
})
export class DataModule { }
