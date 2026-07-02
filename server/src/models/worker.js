export default class Worker {
    fullname;
    position;
    salary;
    hireYear;
    constructor(fullname = 'Неизвестно', position = 'Стажер', salary = 5000, hireYear = new Date().getFullYear()) {
        this.fullname = fullname;
        this.position = position;
        this.salary = salary;
        this.hireYear = hireYear;
    }
}
export {};
