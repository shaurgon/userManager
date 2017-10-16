import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {IRechargeParams, UsersService} from '../../../../services/users.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-balance-recharge',
    templateUrl: './balance-recharge.component.html',
    styleUrls: ['./balance-recharge.component.scss']
})
export class BalanceRechargeComponent implements OnInit {

    userId: string = null;
    recharge: IRechargeParams;
    amount: FormControl = new FormControl('', [Validators.required, Validators.min(0)]);

    constructor(private _users: UsersService, public dialogRef: MatDialogRef<BalanceRechargeComponent>) {
        this.recharge = {
            amount: 0,
            comment: ''
        };
    }

    save() {
        if (this.amount.valid) {
            this._users.recharge(this.userId, this.recharge)
                .subscribe(result => {
                    this.dialogRef.close(Object.assign({}, result, {status: true}));
                });
        }
    }

    close() {
        this.dialogRef.close({status: false});
    }

    ngOnInit() {}

}
