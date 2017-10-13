import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage implements OnInit {
  name: any;


  constructor(private navParams: NavParams,
              private navCtrl: NavController) {}

  ngOnInit() {
      this.name = this.navParams.get('userName');
  }

  onGoBack() {
    //this.navCtrl.pop(); // 删除并返回数组的最后一个元素
    this.navCtrl.popToRoot(); // 跳转到首页
  }

}
