import {Component, OnInit} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {Quote} from '../../data/quotes.interface';
import {QuotesService} from "../../services/quotes";
import {QuotePage} from '../quote/quote';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage implements OnInit{

  quotes: Quote[];
  constructor(public navCtrl: NavController,
              private quoteService: QuotesService,
              private modalCtrl: ModalController) {
  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.quotes = this.quoteService.getQuoteFavorite();
  }

  onFavorite(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    console.log(modal);
    modal.present();
  };
}
