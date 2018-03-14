import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AlertComponent } from './alert.component';
import { AlertRoutes } from './alert.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AlertRoutes),
        SharedModule
    ],
    declarations: [AlertComponent]
})
export class AlertModule { }
