interface Employeer{
    fullname: string
    position: string
    salary: number
    hireYear: number
}

export default class Worker{
    fullname: string
    position: string
    salary: number
    hireYear: number

    constructor(fullname = 'Неизвестно', position = 'Стажер', salary = 5000, hireYear = new Date().getFullYear()){
        this.fullname=fullname;
        this.position=position;
        this.salary=salary;
        this.hireYear=hireYear;
    }
}

export { type Employeer}