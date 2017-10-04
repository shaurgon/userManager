import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from "../shared/shared.module";
import {MatToolbarModule, MatIconModule} from '@angular/material';

import {UsersComponent} from "./users.component";
import {UserListComponent} from "./user-list/user-list.component";
import {UsersRoutingModule} from "./users-routing.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        MatToolbarModule,
        MatIconModule,
        UsersRoutingModule
    ],
    declarations: [
        UsersComponent,
        UserListComponent
    ]
})
export class UsersModule {
}
