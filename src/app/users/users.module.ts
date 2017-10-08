import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {UsersComponent} from './users.component';
import {UserListComponent} from './user-list/user-list.component';
import {UsersRoutingModule} from './users-routing.module';
import {UsersService} from '../services/users.service';

@NgModule({
    imports: [
        SharedModule,
        UsersRoutingModule
    ],
    declarations: [
        UsersComponent,
        UserListComponent
    ],
    providers: [
        UsersService
    ]
})
export class UsersModule {
}
