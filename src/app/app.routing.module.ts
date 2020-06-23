import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionalsListComponent } from './views/professionals-list/professionals-list.component';
import { ScheduleComponent } from './views/schedule/schedule.component';

const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'professionals',
        pathMatch: 'full'
    },
    {
        path: 'professionals',
        component: ProfessionalsListComponent
    },
    {
        path: 'schedule/:professionalId',
        component: ScheduleComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
