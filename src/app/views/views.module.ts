import { MaterialComponentsModule } from './../components/material-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalsListComponent } from './professionals-list/professionals-list.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
    declarations: [ProfessionalsListComponent, ScheduleComponent],
    imports: [
        CommonModule,
        ComponentsModule,
        MaterialComponentsModule
    ]
})
export class ViewsModule { }
