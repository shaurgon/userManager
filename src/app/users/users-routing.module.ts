import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserListComponent} from "./user-list/user-list.component";
import {UsersComponent} from "./users.component";

const usersRoutes: Routes = [
    {path: 'user-list', component: UserListComponent}
];

const routes: Routes = [
    {path: 'users', component: UsersComponent, children: usersRoutes}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class UsersRoutingModule {
}
