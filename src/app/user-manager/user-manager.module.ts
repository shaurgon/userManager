import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {UserListComponent} from './user-list/user-list.component';
import {UserEditorComponent} from './user-editor/user-editor.component';
import {UserManagerComponent} from './user-manager.component';
import {UserSearchComponent} from './user-list/user-search/user-search.component';
import {UserCardsComponent} from './user-list/user-cards/user-cards.component';
import {BalanceRechargeComponent} from './user-list/user-cards/balance-recharge/balance-recharge.component';
import {UserTransactionsComponent} from './user-list/user-cards/user-transactions/user-transactions.component';

import {UserManagerRoutingModule} from './user-manager-routing.module';

import {UsersService} from '../services/users.service';
import {SidenavService} from '../services/sidenav.service';

@NgModule({
    imports: [
        SharedModule,
        UserManagerRoutingModule
    ],
    declarations: [
        UserManagerComponent,
        UserListComponent,
        UserEditorComponent,
        BalanceRechargeComponent,
        UserTransactionsComponent,
        UserSearchComponent,
        UserCardsComponent,
    ],
    entryComponents: [
        UserTransactionsComponent, BalanceRechargeComponent
    ],
    providers: [
        UsersService, SidenavService
    ]
})
export class UserManagerModule {
}
