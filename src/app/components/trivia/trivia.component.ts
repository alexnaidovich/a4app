import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-trivia',
    templateUrl: './trivia.component.html',
    styleUrls: ['./trivia.component.scss']
})
export class TriviaComponent implements OnInit {

    me: Me;
    name: string = 'Aliaksandr Naidovich';
    dateOfBirth: Date = new Date(1989, 1, 19);
    startExp: Date = new Date(2018, 4);

    constructor() { }

    ngOnInit() {
        this.me = {
            name: this.name,
            dateOfBirth: this.dateOfBirth,
            age: this.getAge(this.dateOfBirth),
            renderDate: this.renderDate(this.dateOfBirth.toDateString()),
            graduate: 'MSLU, English Faculty',
            exp: this.getExp(this.startExp),
            courses: [
                'TeachMeSkills, 2017',
                'Rolling Scopes School, 2018'
            ],
            stack: [
                'Angular',
                'HTML5/EJS', 
                'CSS3/SCSS', 
                'JS/ES6+',
                'Webpack',
                'NPM',
                'Headless Chrome/Puppeteer',
                'Git',
            ]
        } 
    }

    getAge(dob) {
        const now = new Date();
        let yrs = now.getFullYear() - dob.getFullYear();
        yrs = now.getMonth() > dob.getMonth() 
            ? yrs 
            : now.getMonth() < dob.getMonth()
                ? yrs - 1
                : now.getDate() < dob.getDate()
                    ? yrs - 1
                    : yrs;

        return yrs;
    }

    getExp(start) {
        const now = new Date();
        let yrs = now.getFullYear() - start.getFullYear();
        yrs = yrs === 0 
            ? 0
            : now.getMonth() >= start.getMonth() 
                ? yrs : yrs - 1;

        let mns = now.getMonth() - start.getMonth() >= 0
            ? now.getMonth() - start.getMonth()
            : 11 - (start.getMonth() - now.getMonth());

        let returnYears = yrs > 0 
            ? (yrs > 1 ? `${yrs} years` : `${yrs} year`) : '';
        let returnMonths = mns > 0
            ? (yrs > 0 
                ? (mns > 1 ? `, ${mns} months` : `, ${mns} month`) 
                : (mns > 1 ? `${mns} months` : `${mns} month`))
            : '';

        return returnYears + returnMonths;
    }

    renderDate(datestr: string) {
        return datestr.slice(3);
    }

}

interface Me {
    name: string,
    dateOfBirth: Date,
    age: number,
    renderDate: string,
    graduate: string,
    exp: string,
    courses: string[],
    stack: string[]
}
