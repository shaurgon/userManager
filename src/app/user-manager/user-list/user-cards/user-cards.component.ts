import {Component, OnInit} from '@angular/core';
import {PageEvent, MatDialog} from '@angular/material';
import {Md2Toast} from 'md2';
import _ from 'lodash';

import {IUser, UsersService} from '../../../services/users.service';
import {UserTransactionsComponent} from './user-transactions/user-transactions.component';
import {BalanceRechargeComponent} from './balance-recharge/balance-recharge.component';

@Component({
    selector: 'app-user-cards',
    templateUrl: './user-cards.component.html',
    styleUrls: ['./user-cards.component.scss']
})
export class UserCardsComponent implements OnInit {

    isLoading: Boolean = true;
    total: Number;
    userList: IUser[];

    pageSize = 25;
    pageSizeOptions = [10, 25, 50, 100];

    constructor(private _users: UsersService, private toast: Md2Toast, private dialog: MatDialog) {
    }

    toggleUser(event, user) {
        const data = {enabled: event.checked};
        this._users.update(user.user_id, data).subscribe(result => {
            if (result.status === 'ok') {
                const message = `User ${user.user_name} (ID ${user.user_id}) ${event.checked ? 'enabled' : 'disabled'}`;
                this.toast.show(message, 5000);
            }
        });
    }

    getUsers(params = {}) {
        this.isLoading = true;
        const defaultParams = {
            offset: 0,
            limit: this.pageSize
        };
        const options = _.merge({}, defaultParams, params);
        this._users.list(options)
            .subscribe(
                (data) => {
                    this.total = data.recordsTotal;
                    this.userList = data.data;
                },
                error => {
                },
                () => {
                    this.isLoading = false;
                }
            );
    }

    getMore(params: PageEvent) {
        this.pageSize = params.pageSize;
        const offset = params.pageIndex * params.pageSize;
        this.getUsers({
            offset: offset,
            limit: params.pageSize
        });
    }

    recharge(userId: string) {
        const dialogRef = this.dialog.open(BalanceRechargeComponent, {width: '300px'});
        dialogRef.componentInstance.userId = userId;
        dialogRef.afterClosed().subscribe(result => {
            const idx = _.findIndex(this.userList, ['user_id', userId]);
            if (result.status && idx !== -1) {
                this.userList[idx].balance = result.amount;
            }
        });
    }

    transactions(userId: string) {
        const dialogRef = this.dialog.open(UserTransactionsComponent);
        dialogRef.componentInstance.userId = userId;
    }

    ngOnInit() {
        this.getUsers();
    }

}
