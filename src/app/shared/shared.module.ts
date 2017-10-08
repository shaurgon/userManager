import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {Md2Module} from 'md2';

import {CustomMaterialModule} from './material.module';
import {HttpModule} from '@angular/http';
import {ApiService} from '../services/api.service';
import {ErrorHandlerService} from '../services/error-handler.service';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        CustomMaterialModule,
        Md2Module,
        FlexLayoutModule
    ],
    declarations: [],
    providers: [
        ApiService,
        ErrorHandlerService
    ],
    exports: [
        CommonModule, HttpModule, CustomMaterialModule, Md2Module, FlexLayoutModule
    ]
})
export class SharedModule {
}
