import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UsersPage} from "../users/users";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userPage = UsersPage;
  constructor(public navCtrl: NavController) {}

  toUsersPage() {
    this.navCtrl.push(this.userPage)
      .catch((error) => console.log('Access denied, Argument was' + error));  // ??? 未打印出来
  }


}
