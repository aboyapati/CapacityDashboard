import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  img:string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Layout',
    main: [
      {
        state: 'dashboard',
        name: 'DASHBOARD',
        type: 'link',
        icon: 'ti-dashboard'
      }, {
        state: 'provisioning',
        name: 'PROVISIONING',
        type: 'link',
        icon: 'fa fa-compress',
      },
      {
        state: 'data',
        name: 'DATA CENTERS',
        type: 'sub',
        icon: 'ti-world',
        children: [
          {
            state: 'datacenter',
            name: 'Data Center ZETA',
            img:'assets/images/fa-exclamation.png'

          },
          {
            state: 'datacenter',
            name: 'Data Center 2',
            img:'assets/images/status-green.png'
          },
          {
            state: 'datacenter',
            name: 'Data Center 3',
            img:'assets/images/status-green.png'
          }
        ]
      },
      {
        state: 'alert',
        name: 'ALERT',
        type: 'link',
        icon: 'ti-alert',
        badge: [
          {
            type: '',
            value: '3'
          }
        ]
      },
      {
        state: ' with-social',
        name: 'SETTINGS',
        type: 'link',
        icon: 'ti-settings'
      }
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
