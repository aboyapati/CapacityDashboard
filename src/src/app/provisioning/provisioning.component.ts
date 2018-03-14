import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-provisioning',
  templateUrl: './provisioning.component.html',
  styleUrls: ['./provisioning.component.css']
})
export class ProvisioningComponent implements OnInit {

  imgUrl: string = "assets/images/icon-cube.png";
  callMatricsFilter: boolean = false;
  dataCenters: Datacenter[];
  dataCentersDetails: DatacenterDetails[];

  constructor() { }

  callMatricsClick(i) {
    this.callMatricsFilter = !this.callMatricsFilter;
    if (this.callMatricsFilter) {
      $('#callMatricsDropdown'+i).show();
    } else {
      $('#callMatricsDropdown'+i).hide();
    }
  }

  ngOnInit() {
    this.dataCenters = [{
      name: 'Data Center 1',
      datas: ['Plano, Texas', 'United States', 'IST'],
    },
    {
      name: 'Data Center 2',
      datas: ['Melbourne, Victoria', 'Australia', 'ATC'],
    },
    {
      name: 'Data Center 3',
      datas: ['Toronto, Ontario', 'Canada', 'CNT'],
    },
    {
      name: 'Data Center 4',
      datas: ['Hyderabad, Telangana', 'India', 'IST'],
    }];

    this.dataCentersDetails = [{
      cName: 'NEXUS A',
      type: 'NEXUS',
      version: '75-K',
      ip: '10.201.124.11',
      credential: '',
    },
    {
      cName: 'ASA-1',
      type: 'ASA',
      version: '5-1.0',
      ip: '10.201.124.14',
      credential: '',
    },
    {
      cName: 'VCENTER-1',
      type: 'VCENTER',
      version: '5-5.0.0',
      ip: '10.201.124.100',
      credential: '',
    },
    {
      cName: 'NEXUS B',
      type: 'NEXUS	',
      version: '75-K',
      ip: '10.201.124.11',
      credential: 'string',
    },
    {
      cName: 'ASA-2',
      type: 'ASA',
      version: '5-1.0',
      ip: '10.201.124.14',
      credential: '',
    }];
  }

  moveRight() {
    this.deactivateCard();
    this.dataCenters.push({
      name: 'Data Center 5',
      datas: ['Plano, Texas', 'United States', 'IST'],
    });
    this.dataCenters.splice(0, 1);
  }

  moveLeft() {
    this.deactivateCard();
    this.dataCenters.push({
      name: 'Data Center 2',
      datas: ['Plano, Texas', 'United States', 'IST'],
    });
    this.dataCenters.splice(3, 1);
  }

  activateCard(id) {
    var preId = $('.tab-tile-active').attr('id');
    $('#'+preId).attr('class','col-md-3 col-sm-6 tab-tile');
    $('#rsddropdown'+preId).hide();
    $('#rsddropdown'+id).show();
  }
  deactivateCard() {
    var preId = $('.tab-tile-active').attr('id');
    $('#'+preId).attr('class','col-md-3 col-sm-6 tab-tile');
    $('#rsddropdown'+preId).hide();
  }

  dataCenterClick(id) {
    this.activateCard(id);
    $('#'+id).attr('class','col-md-3 col-sm-6 tab-tile tab-tile-active');
    if(id==0) {
      this.dataCentersDetails = [{
        cName: 'NEXUS A',
        type: 'NEXUS',
        version: '75-K',
        ip: '10.201.124.11',
        credential: '',
      },
      {
        cName: 'ASA-1',
        type: 'ASA',
        version: '5-1.0',
        ip: '10.201.124.14',
        credential: '',
      },
      {
        cName: 'VCENTER-1',
        type: 'VCENTER',
        version: '5-5.0.0',
        ip: '10.201.124.100',
        credential: '',
      },
      {
        cName: 'NEXUS B',
        type: 'NEXUS	',
        version: '75-K',
        ip: '10.201.124.11',
        credential: 'string',
      },
      {
        cName: 'ASA-2',
        type: 'ASA',
        version: '5-1.0',
        ip: '10.201.124.14',
        credential: '',
      }]
    } else if(id==1) {
      this.dataCentersDetails = [{
        cName: 'ASA-1',
        type: 'ASA',
        version: '5-1.0',
        ip: '10.201.124.14',
        credential: '',
      },
      {
        cName: 'VCENTER-1',
        type: 'VCENTER',
        version: '5-5.0.0',
        ip: '10.201.124.100',
        credential: '',
      }]
    } else if(id==2) {
      this.dataCentersDetails = [{
        cName: 'NEXUS B',
        type: 'NEXUS	',
        version: '75-K',
        ip: '10.201.124.11',
        credential: 'string',
      },
      {
        cName: 'ASA-1',
        type: 'ASA',
        version: '5-1.0',
        ip: '10.201.124.14',
        credential: '',
      }]
    } else {
      this.dataCentersDetails = [{
        cName: 'ASA-2',
        type: 'ASA',
        version: '5-1.0',
        ip: '10.201.124.14',
        credential: '',
      },
      {
        cName: 'NEXUS B',
        type: 'NEXUS	',
        version: '75-K',
        ip: '10.201.124.11',
        credential: 'string',
      }]
    }
  }

}

interface Datacenter {
  name: string;
  datas: string[];
}

interface DatacenterDetails {
  cName: string;
  type: string;
  version: string;
  ip: any;
  credential: string;
}
