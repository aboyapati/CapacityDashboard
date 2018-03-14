import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
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

  constructor(private router: Router, private cookieService: CookieService) { }

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

    var checkLogin = function () {
      var tmp = null;
      $.ajax({
        'async': false,
        'type': "POST",
        'global': false,
        'dataType': 'html',
        'url': "assets/webservices/verifyLogin.php",
        'data': { username: username, password: password },
        'success': function (data) {
          tmp = data;
        }
      });
      return tmp;
    }();

    var loginObject = JSON.parse(checkLogin);

    if (loginObject.status == 1) {
      this.login_status = true;
      this.router.navigate(['dashboard']);
    } else {
      $('.rsdAlert').slideDown().text('Invalid Username or Password').css('background', 'red').slideUp(2000);
    }
  }

}
