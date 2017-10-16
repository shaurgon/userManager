import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {ITransactionsData, ITransactionsParams, UsersService} from '../../../../services/users.service';

@Component({
    selector: 'app-user-transactions',
    templateUrl: './user-transactions.component.html',
    styleUrls: ['./user-transactions.component.scss']
})
export class UserTransactionsComponent implements OnInit {

    page: Number = 1;
    userId: string = null;
    transactions: ITransactionsData[];
    transactionTypes: string[] = [
        'payment', 'coupon', 'inGamePurchase', 'internal', 'cancellation'
    ];
    filters: any;

    constructor(private _users: UsersService, public dialogRef: MatDialogRef<UserTransactionsComponent>) {
        let dTo, dFrom;
        dTo = new Date();
        dFrom = new Date();
        dFrom.setMonth(dFrom.getMonth() - 1);
        this.filters = {
            type: '',
            to: dTo,
            from: dFrom
        };
    }

    close(): void {
        this.dialogRef.close({status: false});
    }

    convertDate(date: Date, isFull?: boolean): string {
        return `${date.getFullYear()}-${date.getMonth() + 1}-` +
            `${isFull ? date.getDate() + 1 : date.getDate()}T00:00:00Z`;
    }

    request() {
        const params: ITransactionsParams = {
            transaction_type: this.filters.type ? this.filters.type : '',
            datetime_from: this.convertDate(this.filters.from),
            datetime_to: this.convertDate(this.filters.to, true)
        };
        this._users.transactions(this.userId, params)
            .subscribe(result => {
                this.transactions = result;
            });
    }

    ngOnInit() {
        this.request();
    }

}
