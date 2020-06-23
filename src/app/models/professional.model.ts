import { Schedule } from './schedule.model';

export class Professional {
    constructor(
        public id: string,
        public name: string,
        public profilePicture: string,
        public occupation: string,
        public location: string,
        public timezone: string,
        public score: number,
        public reviewsCount: number,
        public sessionPrice: number,
        public sessionDuration: number,
        public description: string,
        public schedules: Schedule[]
    ) { }
}
