import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserManagerComponent} from './user-manager.component';
import {UserEditorComponent} from './user-editor/user-editor.component';

const childRoutes: Routes = [
    {path: 'create', component: UserEditorComponent},
    {path: ':id/edit', component: UserEditorComponent},
];


const routes: Routes = [
    {path: 'user-manager', component: UserManagerComponent, children: childRoutes}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class UserManagerRoutingModule {
}
