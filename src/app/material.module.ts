import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import {
    MatCommonModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MATERIAL_SANITY_CHECKS,
    MatInputModule
} from '@angular/material';

@NgModule({
    imports: [
        MatCommonModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatGridListModule,
        FlexLayoutModule
    ],
    exports: [
        MatCommonModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule,
        MatInputModule,
        FlexLayoutModule
    ],
    providers: [
        {
            provide: MATERIAL_SANITY_CHECKS,
            useValue: false
        }
    ]
})
export class MaterialModule { }