import { Component, OnInit, Input } from '@angular/core';
import { Professional } from 'src/app/models/professional.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-professional-card',
    templateUrl: './professional-card.component.html',
    styleUrls: ['./professional-card.component.scss']
})
export class ProfessionalCardComponent implements OnInit {

    @Input() professional: Professional;

    constructor(private route: Router) { }

    ngOnInit() {
    }

}
