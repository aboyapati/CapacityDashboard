import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerview',
  templateUrl: './customerview.component.html',
  styleUrls: ['./customerview.component.css']
})
export class CustomerviewComponent implements OnInit {

  imgUrl: string = 'assets/images/icon-cube.png';

  constructor() { }

  ngOnInit() {
  }

}
