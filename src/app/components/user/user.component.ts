import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    user: string;
    userAge: number;
    email: string;
    address: Address;
    hobbies: string[];
    isEditable: boolean = false;

    constructor(private dataService: DataService) { }

    ngOnInit() {

        this.user = 'Alex Naidovich';
        this.userAge = 29;
        this.address = {
            street: 'Miroshnichenko',
            city: 'Minsk',
            country: 'Belarus'
        }
        this.hobbies = ['coding', 'driving', 'music'];

    }

    onClick() {
        let p = prompt('type your age');
        this.userAge = +p;
    }

    addHobby(v:string) {
        this.hobbies.unshift(v);
        return false;
    }

    deleteHobby(v:string) {
        this.hobbies = this.hobbies.filter(x => x !== v);
    }

    toggleEditableMode() {
        this.isEditable = !this.isEditable;
    }

}

interface Address {
    street: string,
    city: string,
    country: string
}
