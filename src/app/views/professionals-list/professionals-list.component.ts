import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';
import { Professional } from 'src/app/models/professional.model';
import { PROFESSIONALS_RESOURCE, SCHEDULES_SUFFIX } from 'src/app/utils/constants';

@Component({
    selector: 'app-professionals-list',
    templateUrl: './professionals-list.component.html',
    styleUrls: ['./professionals-list.component.scss']
})
export class ProfessionalsListComponent implements OnInit {

    public professionalsList: Professional[];

    constructor(
        private genericService: GenericService
    ) { }

    ngOnInit() {
        this.genericService.get(PROFESSIONALS_RESOURCE + SCHEDULES_SUFFIX).subscribe((professionals: Professional[]) => {
            this.professionalsList = professionals;
            console.log(this.professionalsList);
        });
    }

}
