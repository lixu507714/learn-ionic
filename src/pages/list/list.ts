import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  tapped = 0;
  pressed = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  onDisReset(resetType: string) {
    switch (resetType) {
      case 'tap':
        this.tapped = 0;
        break;
      case 'press':
        this.pressed = 0;
        break;
      default:
        this.tapped = 0;
        this.pressed = 0;
    }
  }

  onTap() {
    console.log('taps');
    this.tapped++;
  }

  onPress() {
    console.log('press');
    this.pressed++;
  }

}
