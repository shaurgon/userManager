import {Component, OnInit} from '@angular/core';
import {User, UsersService} from '../../services/users.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    isLoading: Boolean = true;
    total: Number;
    userList: User[];

    constructor(private _users: UsersService) {
    }

    public getUsers(offset = 0, limit = 25) {
        const params = {
            offset: offset,
            limit: limit
        };
        this._users.list(params)
            .subscribe(
                (data) => {
                    this.total = data.recordsTotal;
                    this.userList = data.data;
                },
                error => {},
                () => {
                    this.isLoading = false;
                }
            );
    }

    ngOnInit() {
        this.getUsers();
    }

}
