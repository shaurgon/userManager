import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpModule } from "@angular/http";

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        HttpModule
    ],
    declarations: []
})
export class SharedModule {
}
