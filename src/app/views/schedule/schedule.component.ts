import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';
import { PROFESSIONALS_RESOURCE, SCHEDULES_SUFFIX } from 'src/app/utils/constants';
import { Professional } from 'src/app/models/professional.model';

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

    public professional: Professional;

    constructor(private route: ActivatedRoute, private genericService: GenericService) { }

    ngOnInit() {
        const professionalId = this.route.snapshot.paramMap.get('professionalId');
        this.genericService.get(`${PROFESSIONALS_RESOURCE}/${professionalId}${SCHEDULES_SUFFIX}`)
            .subscribe((professional: Professional) => {
                this.professional = professional;
            });
    }

}
