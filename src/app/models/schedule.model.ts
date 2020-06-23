export class Schedule {
    constructor(
        public id: string,
        public professionalId: string,
        public date: Date,
        public slots: string[]
    ) { }
}
