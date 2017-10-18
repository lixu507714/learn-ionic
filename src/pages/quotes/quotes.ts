import {Component, OnInit} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quotes.interface";
import {QuotesService} from "../../services/quotes";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{

  quote: {category: string, quotes: Quote[], icon: string};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private quoteService: QuotesService) {

  }

  ngOnInit() {
    this.quote = this.navParams.data;
    console.log(this.navParams.data);
  }

  // ionViewDidLoad() {
  //   this.quote = this.navParams.data;
  //    Add elvis operator (?) template to use this approach
  // }
  onAddFavorite(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
        title: 'Add Quote',
        subTitle: 'Are your sure?',
        message: 'Are your sure you want to add the quote?',
        buttons:[
          {
            text: 'Yes, go ahead',
            role:'cancel',
            handler: () => {
              this.quoteService.addQuoteToFavorites(selectedQuote);
            }
          },
          {
            text: 'No, I change my mind!',
            role:'cancel',
            handler: () => {
              console.log('No');
            }
          }
        ]
    });
    alert.present();
  }

  onRemoveFavorite(quote:Quote) {
    this.quoteService.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote: Quote) {
    return this.quoteService.isQuoteFavorite(quote);
  }
}
