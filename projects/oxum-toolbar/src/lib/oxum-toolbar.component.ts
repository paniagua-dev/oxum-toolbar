import {Component, Input} from '@angular/core';
import {IOxumToolbarItem} from './oxum-toolbar.interfaces';

@Component({
    selector: 'oxum-toolbar',
    templateUrl: './oxum-toolbar.component.html',
    styleUrls: ['./oxum-toolbar.component.less'],
})
export class OxumToolbarComponent {
    @Input() public itemsAtLeft: IOxumToolbarItem[] = [];
    @Input() public itemsAtRight: IOxumToolbarItem[] = [];
}
