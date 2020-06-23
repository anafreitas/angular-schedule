import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from './../utils/constants';

@Injectable({
    providedIn: 'root'
})
export class GenericService {

    constructor(
        private http: HttpClient
    ) { }

    get(serviceName: string) {
        return this.http.get(BASE_URL + serviceName);
    }
}
