import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

// regex from material.angular.io =)
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
    selector: 'app-user-search',
    templateUrl: './user-search.component.html',
    styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
    @Output() onSearch = new EventEmitter<any>();

    email: FormControl = new FormControl('', [Validators.pattern(EMAIL_REGEX)]);
    search: any;

    constructor() {
        this.search = {
            user_requisites: '',
            email: ''
        };
    }

    searchUpdate() {
        if (this.email.valid) {
            this.onSearch.emit(this.search);
        }
    }

    ngOnInit() {}

}
