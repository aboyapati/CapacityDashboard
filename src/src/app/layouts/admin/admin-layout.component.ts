import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { state, style, transition, animate, trigger, AUTO_STYLE } from '@angular/animations';
import { CookieService } from 'ngx-cookie-service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MenuItems } from '../../shared/menu-items/menu-items';
import { DatacenterComponent } from '../../components/data/datacenter/datacenter.component';

declare const $: any;

export interface Options {
  heading?: string;
  removeFooter?: boolean;
  mapHeader?: boolean;
}

@Component({
  selector: 'app-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('mobileMenuTop', [
      state('no-block, void',
        style({
          overflow: 'hidden',
          height: '0px',
        })
      ),
      state('yes-block',
        style({
          height: AUTO_STYLE,
        })
      ),
      transition('no-block <=> yes-block', [
        animate('400ms ease-in-out')
      ])
    ])
  ]
})

export class AdminLayoutComponent implements OnInit {
  closeResult: string;
  deviceType = 'desktop';
  verticalNavType = 'expanded';
  verticalEffect = 'shrink';
  innerHeight: string;
  isCollapsedMobile = 'no-block';
  isCollapsedSideBar = 'no-block';
  toggleOn = true;
  windowWidth: number;
  currentUser: string = sessionStorage.username;

  public htmlButton: string;

  constructor(public menuItems: MenuItems, private router: Router, private cookieService: CookieService, private modalService: NgbModal, public dcComp: DatacenterComponent) {
    const scrollHeight = window.screen.height - 150;
    this.innerHeight = scrollHeight + 'px';
    this.windowWidth = window.innerWidth;
    this.setMenuAttributs(this.windowWidth);
  }

  ngOnInit() {
    if (!sessionStorage.username || !sessionStorage.id || typeof sessionStorage.username == 'undefined' || typeof sessionStorage.id == 'undefined') {
      this.router.navigate(['login']);
    }
    setTimeout(() => {
      if (this.cookieService.get('leftNavSelectedMenu') != '') {
        $('#' + this.cookieService.get('leftNavSelectedMenu')).addClass("pcoded-trigger");
        this.cookieService.set('leftNavSelectedMenu', '');
        setTimeout(() => {
          $('.EnableDcDis').removeClass('EnableDcDis').addClass('EnableDcBlock');
          $('#toEnableDc' + this.cookieService.get('leftNavSelectedSubcompId')).addClass('EnableDcDis').removeClass('EnableDcBlock');
        }, 1000);
      }
    }, 1000);
  }

  reloadCurrentPage(id = '') {
    setTimeout(() => {
      if (this.cookieService.get('currentUrl') == this.router.url) {
        if (id != '') {
          this.cookieService.set('leftNavSelectedMenu', id);
        }
        location.reload();
      } else {
        if (this.router.url != '/data/datacenter/' + this.cookieService.get('leftNavSelectedSubcompId')) {
          $('.EnableDcDis').removeClass('EnableDcDis').addClass('EnableDcBlock');
        }
      }
      this.cookieService.set('currentUrl', this.router.url);
    }, 500);
  }

  rsdClick() {
    this.router.navigate(['dashboard']);
  }

  logoutClicked(e) {
    e.preventDefault();
    this.cookieService.set('logout_clicked', 'yes');
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

  disableRouterAction(e) {
    e.preventDefault();
    return false;
  }

  onClickedOutside(e: Event) {
    if (this.windowWidth < 768 && this.toggleOn && this.verticalNavType !== 'offcanvas') {
      this.toggleOn = true;
      this.verticalNavType = 'offcanvas';
    }
  }

  onResize(event) {
    this.innerHeight = event.target.innerHeight + 'px';
    /* menu responsive */
    this.windowWidth = event.target.innerWidth;
    let reSizeFlag = true;
    if (this.deviceType === 'tablet' && this.windowWidth >= 768 && this.windowWidth <= 1024) {
      reSizeFlag = false;
    } else if (this.deviceType === 'mobile' && this.windowWidth < 768) {
      reSizeFlag = false;
    }

    if (reSizeFlag) {
      this.setMenuAttributs(this.windowWidth);
    }
  }

  setMenuAttributs(windowWidth) {
    if (windowWidth >= 768 && windowWidth <= 1024) {
      this.deviceType = 'tablet';
      this.verticalNavType = 'collapsed';
      this.verticalEffect = 'push';
    } else if (windowWidth < 768) {
      this.deviceType = 'mobile';
      this.verticalNavType = 'offcanvas';
      this.verticalEffect = 'overlay';
    } else {
      this.deviceType = 'desktop';
      this.verticalNavType = 'expanded';
      this.verticalEffect = 'shrink';
    }
  }

  toggleOpened() {
    if (this.windowWidth < 768) {
      this.toggleOn = this.verticalNavType === 'offcanvas' ? true : this.toggleOn;
      this.verticalNavType = this.verticalNavType === 'expanded' ? 'offcanvas' : 'expanded';
    } else {
      this.verticalNavType = this.verticalNavType === 'expanded' ? 'collapsed' : 'expanded';
    }
  }

  toggleOpenedSidebar() {
    this.isCollapsedSideBar = this.isCollapsedSideBar === 'yes-block' ? 'no-block' : 'yes-block';
  }

  onMobileMenu() {
    this.isCollapsedMobile = this.isCollapsedMobile === 'yes-block' ? 'no-block' : 'yes-block';
  }

  onNavigate() {
    window.open("http://www.tekvizion.com", "_blank");
  }

  open(content) {
    this.modalService.open(content, { windowClass: 'custom_modal', backdrop: 'static' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return 'with: ${reason}';
    }
  }
}
