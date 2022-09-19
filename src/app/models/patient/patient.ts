export class Patient {
    constructor(
        public name: string,
        public age: number,
        public gender: string,
        public doctor_name: string,
        public date_of_visit: Date,
        public prescription: string
    ) {}
}
