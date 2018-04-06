import { Injectable } from '@angular/core';
import { ConfigService } from '../../config.service';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  id: number;
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  img: string;
  subComponentChildren: any;
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
      },
      {
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
        children: []
      }
    ]
  }
];

@Injectable()
export class MenuItems {

  dynamicSubMenu: any[];
  dynamic: any;
  dd: any;
  subComponentChildren: any;

  constructor(private config: ConfigService) {

    setTimeout(() => {
      this.config.getLeftNavDetailslist().subscribe(res => {
        this.dynamic = res;
        this.dynamicSubMenu = [];
        for (let i = 0; i < res.length; i++) {

          this.subComponentChildren = [];
          for (let j = 0; j < res[i].components.length; j++) {
            this.subComponentChildren.push({
              'id': res[i].components[j].id,
              'name': res[i].components[j].name
            });
          }

          if (this.dynamic[i].status == "Bad") {
            this.dynamicSubMenu.push({
              'id': this.dynamic[i].id,
              'state': 'datacenter/' + this.dynamic[i].id,
              'name': this.dynamic[i].name,
              'img': 'assets/images/fa-exclamation.png',
              'subComponentChildren': this.subComponentChildren
            });
          }
          else if (this.dynamic[i].status == "Good") {
            this.dynamicSubMenu.push({
              'id': this.dynamic[i].id,
              'state': 'datacenter/' + this.dynamic[i].id,
              'name': this.dynamic[i].name,
              'img': 'assets/images/status-green.png',
              'subComponentChildren': this.subComponentChildren
            });
          }
          else if (this.dynamic[i].status == "Alert") {
            this.dynamicSubMenu.push({
              'id': this.dynamic[i].id,
              'state': 'datacenter/' + this.dynamic[i].id,
              'name': this.dynamic[i].name,
              'img': 'assets/images/status-yellow.png',
              'subComponentChildren': this.subComponentChildren
            });
          }

        }
      });
    }, 1000);



  }

  getAll(): Menu[] {

    if (sessionStorage.reloadLeftNav == 'yes') {
      sessionStorage.setItem('reloadLeftNav', '');
      this.config.getLeftNavDetailslist().subscribe(res => {
        this.dynamic = res;
        this.dynamicSubMenu = [];
        for (let i = 0; i < res.length; i++) {

          this.subComponentChildren = [];
          for (let j = 0; j < res[i].components.length; j++) {
            this.subComponentChildren.push({
              'id': res[i].components[j].id,
              'name': res[i].components[j].name
            });
          }

          if (this.dynamic[i].status == "Bad") {
            this.dynamicSubMenu.push({
              'id': this.dynamic[i].id,
              'state': 'datacenter/' + this.dynamic[i].id,
              'name': this.dynamic[i].name,
              'img': 'assets/images/fa-exclamation.png',
              'subComponentChildren': this.subComponentChildren
            });
          }
          else if (this.dynamic[i].status == "Good") {
            this.dynamicSubMenu.push({
              'id': this.dynamic[i].id,
              'state': 'datacenter/' + this.dynamic[i].id,
              'name': this.dynamic[i].name,
              'img': 'assets/images/status-green.png',
              'subComponentChildren': this.subComponentChildren
            });
          }
          else if (this.dynamic[i].status == "Alert") {
            this.dynamicSubMenu.push({
              'id': this.dynamic[i].id,
              'state': 'datacenter/' + this.dynamic[i].id,
              'name': this.dynamic[i].name,
              'img': 'assets/images/status-yellow.png',
              'subComponentChildren': this.subComponentChildren
            });
          }

        }
      });
    }

    MENUITEMS[0].main[2]['children'] = this.dynamicSubMenu;

    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
