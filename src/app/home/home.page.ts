import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

isLoading=true;
ngOnInit(){
  setTimeout(()=>{
    this.isLoading=false;
  },3000)
}
    slides = [1, 2, 3, 4, 5];



}
