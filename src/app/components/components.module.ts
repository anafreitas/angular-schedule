import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalCardComponent } from './professional-card/professional-card.component';
import { MaterialComponentsModule } from './material-components.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        ProfessionalCardComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MaterialComponentsModule
    ],
    exports: [
        ProfessionalCardComponent
    ]
})
export class ComponentsModule { }
