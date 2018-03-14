import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgProgressModule } from 'ngx-progressbar';

declare const $: any;

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html'
})
export class LoadingComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {

    var i = 1;                     

    function myLoop () {   
      if (i < 51) {
        setTimeout(function () {   
          $('#counter_percent').html(i);
          i++;                     
          if (i < 101) {           
           myLoop();             
         }                        
       }, 60)
      }if (i >50) {
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


    $('#content').removeClass('fullwidth').delay(9).queue(function(next){
      $(this).addClass('fullwidth');
      next();
    });
  }
}
