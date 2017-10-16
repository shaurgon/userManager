import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {Md2Toast} from 'md2';
import _ from 'lodash';

import {IUser, UsersService} from '../../services/users.service';
import {SidenavService} from '../../services/sidenav.service';

// regex from material.angular.io =)
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
    selector: 'app-user-editor',
    templateUrl: './user-editor.component.html',
    styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {

    user: IUser;
    userId: string;

    constructor(private _users: UsersService, private _sidenav: SidenavService,
                private fb: FormBuilder, private route: ActivatedRoute,
                private router: Router, private toast: Md2Toast) {
        this.user = {
            user_id: ''
        };
    }

    userForm = this.fb.group({
        userId: ['', [Validators.required]],
        userName: '',
        userCustom: '',
        email: ['', [Validators.pattern(EMAIL_REGEX)]],
        enabled: ''
    });

    create() {
        const user = this.user;
        this._users.create(user).subscribe(
            result => {
                console.log(result);
                const message = `User ${user.user_name} (ID ${user.user_id}) created`;
                this.toast.show(message, 5000);
            },
            () => {
                const message = `Error while creating`;
                this.toast.show(message, 5000);
            },
            () => this.onClose()
        );
    }

    save() {
        const user = this.user;
        this._users.update(this.userId, this.user).subscribe(
            result => {
                if (result.status === 'ok') {
                    const message = `User ${user.user_name} (ID ${user.user_id}) updated`;
                    this.toast.show(message, 5000);
                }
            },
            () => {
                const message = `Error while updating`;
                this.toast.show(message, 5000);
            },
            () => this.onClose()
        );
    }

    cancel() {
        this.onClose();
    }

    onClose() {
        this._sidenav.close();
        this.router.navigate(['./user-manager']);
    }

    ngOnInit() {
        this.route.params.subscribe((item: { id: string }) => {
            if (!_.isEmpty(item)) {
                this.userId = item.id;
                this._users.get(this.userId).subscribe((result: IUser) => {
                    this.user = result;
                    this._sidenav.open();
                });
            } else {
                this._sidenav.open();
            }
        });
    }

}
