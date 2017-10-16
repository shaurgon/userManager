import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {Md2Module} from 'md2';

import {CustomMaterialModule} from './material.module';
import {HttpModule} from '@angular/http';
import {ApiService} from '../services/api.service';
import {ErrorHandlerService} from '../services/error-handler.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NonclickableDirective} from './nonclickable.directive';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule, ReactiveFormsModule,
        CustomMaterialModule,
        Md2Module,
        FlexLayoutModule
    ],
    declarations: [
        NonclickableDirective
    ],
    providers: [
        ApiService,
        ErrorHandlerService
    ],
    exports: [
        CommonModule, HttpModule, FormsModule, ReactiveFormsModule, CustomMaterialModule, Md2Module, FlexLayoutModule, NonclickableDirective
    ]
})
export class SharedModule {
}
