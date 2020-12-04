import {MenuItem} from 'primeng/api';

export interface IOxumToolbarItem extends MenuItem {
    subMenuItem?: MenuItem[];
    tooltip?: string | false;
}