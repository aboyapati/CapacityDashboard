import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ReloadComponent } from './reload.component';
import { ReloadRoutes } from './reload.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ReloadRoutes),
        SharedModule
    ],
    declarations: [ReloadComponent]
})
export class ReloadModule { }
