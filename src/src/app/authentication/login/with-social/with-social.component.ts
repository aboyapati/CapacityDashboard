import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private config: ConfigService) { }

  ngOnInit() {
    if (sessionStorage.username && sessionStorage.id && typeof sessionStorage.username != 'undefined' && typeof sessionStorage.id != 'undefined') {
      this.router.navigate(['dashboard']);
    }

    this.logout_clicked = sessionStorage.logout_clicked;

    if (this.logout_clicked == 'yes') {
      this.loading_status = true;
      sessionStorage.setItem('logout_clicked', 'no');
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
        }, 30)
      } if (i > 50) {
        setTimeout(function () {
          $('#counter_percent').html(i);
          i++;
          if (i < 101) {
            myLoop();
          }
        }, 60)
      }

    }
    myLoop();

    setTimeout(() => {
      this.loading_status = true;
    }, 4500);

    $('#content').removeClass('fullwidth').delay(9).queue(function (next) {
      $(this).addClass('fullwidth');
      next();
    });

  }

  verifyLogin(e) {
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    setTimeout(() => {
      this.config.verifyLogin(username, password).subscribe(res => {
        if (res.status == 1) {
          sessionStorage.setItem('currentUrl', '/dashboard');
          this.login_status = true;
          sessionStorage.setItem('username', res.username);
          sessionStorage.setItem('name', res.name);
          sessionStorage.setItem('id', res.id);
          this.router.navigate(['dashboard']);
        } else {
          $('.rsdAlert').slideDown().text('Invalid Username or Password').css('background', 'red').slideUp(2000);
        }
      });
    }, 100);

  }

}
