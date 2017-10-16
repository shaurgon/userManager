import {NgModule} from '@angular/core';
import {
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatInputModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatMenuModule,
    MatDatepickerModule
} from '@angular/material';

@NgModule({
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule,
        MatListModule,
        MatInputModule,
        MatTooltipModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatSlideToggleModule,
        MatSidenavModule,
        MatButtonModule,
        MatDialogModule,
        MatSelectModule,
        MatMenuModule,
        MatDatepickerModule
    ]
})
export class CustomMaterialModule {
}
