import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PrimeIcons} from 'primeng/api';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
    public appTitle: string = '';
    public toolbarMenuItems = {
        simpleActions: [
            {
                label: 'Download',
                icon: PrimeIcons.DOWNLOAD,
            },
            {
                label: 'Preview',
                icon: PrimeIcons.WINDOW_MAXIMIZE,
                command: () => {alert('Preview')},
                tooltip: 'Preview',
            },
            {
                label: 'Print',
                icon: PrimeIcons.PRINT,
                command: () => {alert('Print')},
                tooltip: 'Open and print',
                subMenuItem: [
                    {
                        label: 'Print',
                        command: () => {alert('printed')},
                    },
                ],
            },
        ],
        moreActions: [
            {
                label: 'Open',
                icon: PrimeIcons.FILE_O,
                command: () => {alert('Opened')},
                tooltip: 'Open new',
                styleClass: 'p-button-warning',
            },
            {
                label: 'Save',
                icon: PrimeIcons.SAVE,
                command: () => {alert('Saved')},
                tooltip: 'Save this',
                styleClass: 'p-button-warning',
            },
        ],
    };
    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.appTitle = this.route.snapshot.data['title'];
    }

}
