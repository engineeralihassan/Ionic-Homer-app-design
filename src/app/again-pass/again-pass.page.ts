import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-again-pass',
  templateUrl: './again-pass.page.html',
  styleUrls: ['./again-pass.page.scss'],
})
export class AgainPassPage implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  goBack(){
    this.location.back();
  }

}
