import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Quote} from '../../data/quotes.interface';
import quotes from '../../data/quotes';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage implements OnInit{

  quoteCollection: {category: string, quotes: Quote[], icon: string}[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ngOnInit() {
    this.quoteCollection = quotes;
  }

}
