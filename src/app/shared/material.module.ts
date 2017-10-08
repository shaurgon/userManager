import {NgModule} from '@angular/core';
import {
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatListModule
} from '@angular/material';

@NgModule({
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule,
        MatListModule
    ]
})
export class CustomMaterialModule {
}
