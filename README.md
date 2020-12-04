# OxumToolbar

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.3.
<br/>
This is a simple library to add a toolbar using Primeng in an Angular project

##Installation
`npm i oxum-toolbar primeng primeicons`

Then update your style dependencies in angular.json: 

``` json
    ...
    "styles": [
      "node_modules/primeicons/primeicons.css",
      "node_modules/primeng/resources/primeng.min.css",
      "node_modules/primeng/resources/themes/saga-blue/theme.css",
       ...
    ],
    ...
```

## Basic usage

```js
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
```