import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenuModule} from 'primeng/menu';
import {SplitButtonModule} from 'primeng/splitbutton';
import {ToolbarModule as PrimeToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip';
import {OxumToolbarComponent} from './oxum-toolbar.component';

@NgModule({
    declarations: [OxumToolbarComponent],
    imports: [
        CommonModule,
        PrimeToolbarModule,
        SplitButtonModule,
        TooltipModule,
        MenuModule,
    ],
    exports: [
        OxumToolbarComponent,
    ],
})
export class OxumToolbarModule {
}
