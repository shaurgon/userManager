import {Component, OnInit, ViewChild} from '@angular/core';
import {UserCardsComponent} from './user-cards/user-cards.component';

export interface ISearchParams {
    user_requisites?: string;
    email?: string;
}

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    @ViewChild(UserCardsComponent) cardsComponent: UserCardsComponent;

    constructor() {}

    refreshCards() {
        this.cardsComponent.getUsers();
    }

    onSearch(event: ISearchParams) {
        this.cardsComponent.getUsers(event);
    }

    ngOnInit() {
    }

}
