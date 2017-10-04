// core
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// modules
import {SharedModule} from "./shared/shared.module";
import {UsersModule} from "./users/users.module";
import {AppRoutingModule} from "./app-routing.module";

// components
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

@NgModule({
    declarations: [
        AppComponent, PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule,
        UsersModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
