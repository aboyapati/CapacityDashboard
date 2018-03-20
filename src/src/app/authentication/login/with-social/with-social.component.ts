import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfigService } from '../../../config.service';
declare const $: any;
@Component({
  selector: 'app-with-social',
  templateUrl: './with-social.component.html',
  styleUrls: ['./with-social.component.css']
})
export class WithSocialComponent implements OnInit {

  login_status: boolean = false;
  loading_status: boolean = false;
  logout_clicked: string;

  constructor(private router: Router, private cookieService: CookieService, private config: ConfigService) { }

  ngOnInit() {

    this.logout_clicked = this.cookieService.get('logout_clicked');

    if (this.logout_clicked == 'yes') {
      this.loading_status = true;
      this.cookieService.set('logout_clicked', 'no');
    }

    var i = 1;
    function myLoop() {
      if (i < 51) {
        setTimeout(function () {
          $('#counter_percent').html(i);
          i++;
          if (i < 101) {
            myLoop();
          }
        }, 60)
      } if (i > 50) {
        setTimeout(function () {
          $('#counter_percent').html(i);
          i++;
          if (i < 101) {
            myLoop();
          }
        }, 120)
      }

    }
    myLoop();

    setTimeout(() => {
      this.loading_status = true;
    }, 9500);

    $('#content').removeClass('fullwidth').delay(9).queue(function (next) {
      $(this).addClass('fullwidth');
      next();
    });

  }

  verifyLogin(e) {
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    setTimeout(()=>{
    this.config.verifyLogin(username, password).subscribe(res => {
      if (res.status == 1) {
        this.login_status = true;
        this.router.navigate(['dashboard']);
      } else {
        $('.rsdAlert').slideDown().text('Invalid Username or Password').css('background', 'red').slideUp(2000);
      }
    });
    },100);
    
  }

}
