import { Quote } from '../data/quotes.interface';

export class QuotesService {
  favoriteQuote: Quote[] = [];

  // 添加
  addQuoteToFavorites(quote: Quote) {
    this.favoriteQuote.push(quote);
  }

  // 删除
  removeQuoteFromFavorites(quote: Quote) {
    const position = this.favoriteQuote.findIndex((quoteEl:Quote) => {
      return quoteEl.id == quote.id;
    });
    this.favoriteQuote.splice(position,1);
  }

  // 返回数组
  getQuoteFavorite(): Quote[] {
    return this.favoriteQuote.slice();
  }

  // 判断
  isQuoteFavorite(quote: Quote) {
    return this.favoriteQuote.find((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    })
  }
}
