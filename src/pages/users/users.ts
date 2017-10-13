import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {UserPage} from "./user/user";

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  constructor(private navCtrl: NavController){}

  onLoadUser(name: string) {
    this.navCtrl.push(UserPage, {userName: name})
  }

  // ionic 的生命周期
  // ionViewCanEnter(): boolean | Promise<boolean> {
  //   console.log('ionViewCanEnter');
  //   const rad = Math.random();
  //     return rad >0.1;
  // }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad');
  // };
  //
  // ionViewViewEnter() {
  //   console.log('ionViewViewEnter');
  // };
  //
  // ionViewDidEnter() {
  //   console.log('ionViewDidEnter');
  // };
  //
  // ionViewCanLeave(): boolean | Promise<boolean>  {
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve();
  //     },1000);
  //   });
  //   return promise;
  //};


  // ionViewDidLoad	当页面加载的时候触发，仅在页面创建的时候触发一次，如果被缓存了，那么下次再打开这个页面则不会触发
  // ionViewWillEnter	顾名思义，当将要进入页面时触发
  // ionViewDidEnter	当进入页面时触发
  // ionViewWillLeave	当将要从页面离开时触发
  // ionViewDidLeave	离开页面时触发
  // ionViewWillUnload	当页面将要销毁同时页面上元素移除时触发

}
