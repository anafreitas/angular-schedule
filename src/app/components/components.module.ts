import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalCardComponent } from './professional-card/professional-card.component';
import { MaterialComponentsModule } from './material-components.module';
import { RouterModule } from '@angular/router';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        ProfessionalCardComponent,
        NgbRating
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
