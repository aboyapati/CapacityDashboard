import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { ReportComponent } from './report.component';
import { ReportRoutes } from './report.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ReportRoutes),
    SharedModule
  ],
  declarations: [ReportComponent]
})
export class ReportModule { }
