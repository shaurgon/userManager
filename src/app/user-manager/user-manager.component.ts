import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material';
import {Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {SidenavService} from '../services/sidenav.service';
import {UserListComponent} from './user-list/user-list.component';

@Component({
    selector: 'app-user-manager',
    templateUrl: './user-manager.component.html',
    styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent implements OnInit {

    @ViewChild('sidenav') sidenav: MatDrawer;
    @ViewChild(UserListComponent) userlistComponent: UserListComponent;

    constructor(private _sidenav: SidenavService, private router: Router) {
    }

    onDeactivate(event) {
        this.userlistComponent.refreshCards();
    }

    closeEditor() {
        this._sidenav.close();
        this.router.navigate(['user-manager']);
    }

    ngOnInit() {
        this._sidenav.component = this.sidenav;
    }

}
