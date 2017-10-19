import {Component, OnInit} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {Quote} from '../../data/quotes.interface';
import {QuotesService} from "../../services/quotes";
import {QuotePage} from '../quote/quote';
import {SettingsService} from "../../services/settings";

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage implements OnInit{

  quotes: Quote[];
  constructor(public navCtrl: NavController,
              private quoteService: QuotesService,
              private modalCtrl: ModalController,
              private settingsService: SettingsService) {
  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.quotes = this.quoteService.getQuoteFavorite();
  }

  onFavorite(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.onRemoveFromFavorites(quote);
      }
    });
  };

  onRemoveFromFavorites(quote: Quote) {
    this.quoteService.removeQuoteFromFavorites(quote);
    const position = this.quotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
    this.quotes.splice(position, 1);
  }

  // 按钮选中改变背景色
  changeBackground() {
    return this.settingsService.isAltBackground();
  }

}
