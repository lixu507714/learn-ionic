webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotesService; });
var QuotesService = (function () {
    function QuotesService() {
        this.favoriteQuote = [];
    }
    // 添加
    QuotesService.prototype.addQuoteToFavorites = function (quote) {
        this.favoriteQuote.push(quote);
    };
    // 删除
    QuotesService.prototype.removeQuoteFromFavorites = function (quote) {
        var position = this.favoriteQuote.findIndex(function (quoteEl) {
            return quoteEl.id == quote.id;
        });
        this.favoriteQuote.splice(position, 1);
    };
    // 返回数组
    QuotesService.prototype.getQuoteFavorite = function () {
        return this.favoriteQuote.slice();
    };
    // 判断
    QuotesService.prototype.isQuoteFavorite = function (quote) {
        return this.favoriteQuote.find(function (quoteEl) {
            return quoteEl.id == quote.id;
        });
    };
    return QuotesService;
}());

//# sourceMappingURL=quotes.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
var SettingsService = (function () {
    function SettingsService() {
        this.altBackground = false;
    }
    SettingsService.prototype.setBackground = function (isAll) {
        this.altBackground = isAll;
    };
    SettingsService.prototype.isAltBackground = function () {
        return this.altBackground;
    };
    return SettingsService;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shopping_list__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShoppingListPage = (function () {
    function ShoppingListPage(navCtrl, navParams, slService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slService = slService;
    }
    ShoppingListPage.prototype.onAddItem = function (form) {
        this.slService.addItem(form.value.ingredientName, form.value.amount);
        form.reset();
        this.ingredientItem();
    };
    ShoppingListPage.prototype.ingredientItem = function () {
        this.ingredientList = this.slService.getItems();
    };
    ShoppingListPage.prototype.deleteItem = function (index) {
        this.slService.removeItem(index);
        this.ingredientItem();
    };
    return ShoppingListPage;
}());
ShoppingListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-shopping-list',template:/*ion-inline-start:"/Users/lixu/learn-ionic/src/pages/shopping-list/shopping-list.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>shopping-list</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="0;onAddItem(f)">\n    <ion-list>\n      <ion-item>\n        <ion-label fixed>Name</ion-label>\n        <ion-input type="text" name="ingredientName" placeholder="milk" ngModel required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>Amount</ion-label>\n        <ion-input type="number" name="amount" placeholder="2" ngModel required></ion-input>\n      </ion-item>\n    </ion-list>\n    <button color="primaryTwo" ion-button type="submit" block [disabled]="!f.valid">Add Item</button>\n  </form>\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of ingredientList;let i = index;">\n      <ion-item>\n        <h2>{{item.name}} ({{item.amount}})</h2>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="danger" (click)="deleteItem(i)"><ion-icon>delete</ion-icon></button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/Users/lixu/learn-ionic/src/pages/shopping-list/shopping-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_shopping_list__["a" /* ShoppingListService */]])
], ShoppingListPage);

//# sourceMappingURL=shopping-list.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_recipe__ = __webpack_require__(207);

var RecipesService = (function () {
    function RecipesService() {
        this.recipes = [];
    }
    RecipesService.prototype.addRecipe = function (title, description, difficulty, ingredients) {
        this.recipes.push(new __WEBPACK_IMPORTED_MODULE_0__models_recipe__["a" /* Recipes */](title, description, difficulty, ingredients));
    };
    RecipesService.prototype.getRecipes = function () {
        return this.recipes.slice();
    };
    RecipesService.prototype.updateRecipe = function (index, title, description, difficulty, ingredients) {
        this.recipes[index] = new __WEBPACK_IMPORTED_MODULE_0__models_recipe__["a" /* Recipes */](title, description, difficulty, ingredients);
    };
    RecipesService.prototype.removeRecipe = function (index) {
        this.recipes.splice(index, 1);
    };
    return RecipesService;
}());

//# sourceMappingURL=recipes.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favorites_favorites__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library_library__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPage = (function () {
    function TabsPage() {
        this.favoritesPage = __WEBPACK_IMPORTED_MODULE_1__favorites_favorites__["a" /* FavoritesPage */];
        this.libraryPage = __WEBPACK_IMPORTED_MODULE_2__library_library__["a" /* LibraryPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabs',
        template: "\n    <ion-tabs>\n      <ion-tab [root]=\"favoritesPage\" tabTitle=\"Favorite\" tabIcon=\"star\"></ion-tab>\n      <ion-tab [root]=\"libraryPage\" tabTitle=\"Library\" tabIcon=\"book\"></ion-tab>\n    </ion-tabs>\n  "
    })
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuotePage = (function () {
    function QuotePage(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    }
    QuotePage.prototype.ionViewDidLoad = function () {
        this.person = this.navParams.get('person');
        this.text = this.navParams.get('text');
    };
    QuotePage.prototype.onClose = function (remove) {
        if (remove === void 0) { remove = false; }
        this.viewCtrl.dismiss(remove); // 移除本身
    };
    return QuotePage;
}());
QuotePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-quote',template:/*ion-inline-start:"/Users/lixu/learn-ionic/src/pages/quote/quote.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{person}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding text-center>\n  <ion-card>\n    <ion-card-content>\n      {{text}}\n    </ion-card-content>\n    <ion-row>\n      <ion-col>\n        <button ion-button small outline color="danger" (click)="onClose(true)">\n          Unfavorite\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <button ion-button color="danger" (click)="onClose()">Close</button>\n</ion-content>\n'/*ion-inline-end:"/Users/lixu/learn-ionic/src/pages/quote/quote.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], QuotePage);

//# sourceMappingURL=quote.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_quotes__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quotes_quotes__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LibraryPage = (function () {
    function LibraryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.quotesPage = __WEBPACK_IMPORTED_MODULE_3__quotes_quotes__["a" /* QuotesPage */];
    }
    LibraryPage.prototype.ngOnInit = function () {
        this.quoteCollection = __WEBPACK_IMPORTED_MODULE_2__data_quotes__["a" /* default */];
    };
    return LibraryPage;
}());
LibraryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-library',template:/*ion-inline-start:"/Users/lixu/learn-ionic/src/pages/library/library.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Quote Library</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <h3 text-center>Select your favorite Quote</h3>\n  <ion-list>\n    <button ion-item *ngFor="let quote of quoteCollection"  [navPush]="quotesPage" [navParams]="quote">\n      <ion-icon [name]="quote.icon"></ion-icon>\n      <h2>{{quote.category | uppercase}}</h2>\n      <p>{{quote.quotes.length}} quote</p>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/lixu/learn-ionic/src/pages/library/library.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], LibraryPage);

//# sourceMappingURL=library.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_quotes__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuotesPage = (function () {
    function QuotesPage(navCtrl, navParams, alertCtrl, quoteService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.quoteService = quoteService;
    }
    QuotesPage.prototype.ngOnInit = function () {
        this.quote = this.navParams.data;
        console.log(this.navParams.data);
    };
    // ionViewDidLoad() {
    //   this.quote = this.navParams.data;
    //    Add elvis operator (?) template to use this approach
    // }
    QuotesPage.prototype.onAddFavorite = function (selectedQuote) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Add Quote',
            subTitle: 'Are your sure?',
            message: 'Are your sure you want to add the quote?',
            buttons: [
                {
                    text: 'Yes, go ahead',
                    role: 'cancel',
                    handler: function () {
                        _this.quoteService.addQuoteToFavorites(selectedQuote);
                    }
                },
                {
                    text: 'No, I change my mind!',
                    role: 'cancel',
                    handler: function () {
                        console.log('No');
                    }
                }
            ]
        });
        alert.present();
    };
    QuotesPage.prototype.onRemoveFavorite = function (quote) {
        this.quoteService.removeQuoteFromFavorites(quote);
    };
    QuotesPage.prototype.isFavorite = function (quote) {
        return this.quoteService.isQuoteFavorite(quote);
    };
    return QuotesPage;
}());
QuotesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-quotes',template:/*ion-inline-start:"/Users/lixu/learn-ionic/src/pages/quotes/quotes.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{quote?.category | uppercase}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngFor="let quoteList of quote.quotes; let i = index;">\n    <ion-card-header>\n      #{{i+1}}\n    </ion-card-header>\n     <ion-card-content>\n       <p> {{quoteList.text}} </p>\n       <p class="author"> {{quoteList.person}} </p>\n     </ion-card-content>\n    <ion-row>\n      <ion-col text-right>\n        <button ion-button clear small *ngIf="!isFavorite(quoteList)" (click)="onAddFavorite(quoteList)">Favorite</button>\n        <button ion-button clear small color="danger" *ngIf="isFavorite(quoteList)" (click)="onRemoveFavorite(quoteList)">UnFavorite</button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lixu/learn-ionic/src/pages/quotes/quotes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__services_quotes__["a" /* QuotesService */]])
], QuotesPage);

//# sourceMappingURL=quotes.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, settingsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.settingsService = settingsService;
    }
    SettingsPage.prototype.onToggle = function (toggle) {
        console.log(toggle);
        this.settingsService.setBackground(toggle.checked);
    };
    SettingsPage.prototype.checkAltBackground = function () {
        return this.settingsService.isAltBackground();
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/Users/lixu/learn-ionic/src/pages/settings/settings.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row style="overflow: hidden;">\n      <ion-col>\n        <ion-label>Alternative Background</ion-label>\n      </ion-col>\n      <ion-col style="width: 51px;">\n        <ion-toggle style="width: 51px;" (ionChange)="onToggle($event)" [checked]="checkAltBackground()"></ion-toggle>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/lixu/learn-ionic/src/pages/settings/settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_settings__["a" /* SettingsService */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tapped = 0;
        this.pressed = 0;
    }
    ListPage.prototype.onDisReset = function (resetType) {
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
    };
    ListPage.prototype.onTap = function () {
        console.log('taps');
        this.tapped++;
    };
    ListPage.prototype.onPress = function () {
        console.log('press');
        this.pressed++;
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/Users/lixu/learn-ionic/src/pages/list/list.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Assignments</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n        <h3>Enter the right</h3>\n        <p>Tap twice, press four times</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item>\n            <p>Tapped:{{tapped}}</p>\n          </ion-item>\n          <ion-item>\n            <p>Pressed:{{pressed}}</p>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <app-reset (didReset)="onDisReset($event)"></app-reset>\n    <ion-row>\n      <ion-col style="background-color: #51a7e8;" text-center (tap)="onTap()">\n          Tap here\n      </ion-col>\n      <ion-col style="background-color: #51a7e8;" text-center (tap)="onPress()">\n        Press here\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lixu/learn-ionic/src/pages/list/list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_ingredient__ = __webpack_require__(281);

var ShoppingListService = (function () {
    function ShoppingListService() {
        this.ingredients = [];
    }
    ShoppingListService.prototype.addItem = function (name, amount) {
        this.ingredients.push(new __WEBPACK_IMPORTED_MODULE_0__models_ingredient__["a" /* Ingredient */](name, amount));
    };
    ShoppingListService.prototype.addItems = function (items) {
        (_a = this.ingredients).push.apply(_a, items);
        var _a;
    };
    ShoppingListService.prototype.getItems = function () {
        return this.ingredients.slice();
    };
    ShoppingListService.prototype.removeItem = function (index) {
        this.ingredients.splice(index, 1);
    };
    return ShoppingListService;
}());

//# sourceMappingURL=shopping-list.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_recipes_recipes__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_shopping_list_shopping_list__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SecondTabsPage = (function () {
    function SecondTabsPage() {
        this.slpage = __WEBPACK_IMPORTED_MODULE_2__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */];
        this.recipesPage = __WEBPACK_IMPORTED_MODULE_1__pages_recipes_recipes__["a" /* RecipesPage */];
    }
    return SecondTabsPage;
}());
SecondTabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabs-second',
        template: "\n    <ion-tabs>\n      <ion-tab [root]=\"slpage\" color=\"primaryTwo\" tabTitle=\"Shopping List\" tabIcon=\"list-box\"></ion-tab>\n      <ion-tab [root]=\"recipesPage\" tabTitle=\"Recipes\" tabIcon=\"book\"></ion-tab>\n    </ion-tabs>\n  "
    })
], SecondTabsPage);

//# sourceMappingURL=second-tab.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_recipe_edit_recipe__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_recipes__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recipe_recipe__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecipesPage = (function () {
    function RecipesPage(navCtrl, navParams, recipesService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.recipesService = recipesService;
    }
    RecipesPage.prototype.ionViewWillEnter = function () {
        this.recipes = this.recipesService.getRecipes();
    };
    RecipesPage.prototype.onNewRecipe = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_recipe_edit_recipe__["a" /* EditRecipePage */], { mode: 'New' });
    };
    RecipesPage.prototype.onLoadRecipe = function (recipe, index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__recipe_recipe__["a" /* RecipePage */], { recipe: recipe, index: index });
    };
    return RecipesPage;
}());
RecipesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-recipes',template:/*ion-inline-start:"/Users/lixu/learn-ionic/src/pages/recipes/recipes.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>recipes</ion-title>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only color="primaryTwo" (click)="onNewRecipe()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let recipe of recipes; let i = index;" (click)="onLoadRecipe(recipe, i)">\n      <h3>{{recipe.title}}</h3>\n      <ion-note>{{recipe.difficulty}}</ion-note>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/lixu/learn-ionic/src/pages/recipes/recipes.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_recipes__["a" /* RecipesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_recipes__["a" /* RecipesService */]) === "function" && _c || Object])
], RecipesPage);

var _a, _b, _c;
//# sourceMappingURL=recipes.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRecipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_recipes__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditRecipePage = (function () {
    function EditRecipePage(navParams, actionSheetController, alertController, toastController, recipesService, navCtrl) {
        this.navParams = navParams;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.toastController = toastController;
        this.recipesService = recipesService;
        this.navCtrl = navCtrl;
        this.mode = 'New';
        this.selectionOptions = ['Easy', 'hard', 'good'];
    }
    EditRecipePage.prototype.ngOnInit = function () {
        this.mode = this.navParams.get('mode');
        if (this.mode === 'Edit') {
            this.recipe = this.navParams.get('recipe');
            this.index = this.navParams.get('index');
        }
        this.initializeForm();
    };
    EditRecipePage.prototype.initializeForm = function () {
        var title = null;
        var description = null;
        var difficulty = 'Medium';
        var ingredients = [];
        if (this.mode === 'Edit') {
            title = this.recipe.title;
            description = this.recipe.description;
            difficulty = this.recipe.difficulty;
            for (var _i = 0, _a = this.recipe.ingredients; _i < _a.length; _i++) {
                var ingredient = _a[_i];
                ingredients.push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](ingredient.name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required));
            }
        }
        this.recipeForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            'title': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](title, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'description': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](description, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'difficulty': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](difficulty, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'ingredients': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormArray */](ingredients)
        });
    };
    EditRecipePage.prototype.onSubmit = function () {
        var value = this.recipeForm.value;
        var ingredient = [];
        if (value.ingredients.length > 0) {
            ingredient = value.ingredients.map(function (name) {
                return { name: name, amount: 1 };
            });
        }
        if (this.mode === 'Edit') {
            this.recipesService.updateRecipe(this.index, value.title, value.description, value.difficulty, ingredient);
        }
        else {
            this.recipesService.addRecipe(value.title, value.description, value.difficulty, ingredient);
        }
        this.recipeForm.reset();
        this.navCtrl.popToRoot(); // 返回上一个页面
    };
    // 点击出现覆盖层按钮
    EditRecipePage.prototype.onManageIngredients = function () {
        var _this = this;
        var actionSheet = this.actionSheetController.create({
            title: 'What do you want to do?',
            buttons: [
                {
                    text: 'Add Ingredient',
                    role: 'add Ingredient',
                    handler: function () {
                        _this.createNewIngredientAlert();
                    }
                },
                {
                    text: 'Remove Add Ingredient',
                    role: 'destructive',
                    handler: function () {
                        console.log('Remove Add Ingredient');
                        var array = _this.recipeForm.get('ingredients');
                        var len = array.length;
                        for (var i = len; i >= 0; i--) {
                            array.removeAt(i);
                        }
                        var toast = _this.toastController.create({
                            message: 'All Ingredient were delete!',
                            duration: 3000,
                            position: 'top'
                        });
                        toast.present();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    EditRecipePage.prototype.createNewIngredientAlert = function () {
        var _this = this;
        var newIngredientAlert = this.alertController.create({
            title: 'Add Ingredient',
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Name',
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        if (data.name.trim() == '' || data.name == null) {
                            var toast_1 = _this.toastController.create({
                                message: 'Please enter a valid value!',
                                duration: 3000,
                                position: 'top'
                            });
                            toast_1.present();
                            return;
                        }
                        _this.recipeForm.get('ingredients')
                            .push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](data.name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required));
                        var toast = _this.toastController.create({
                            message: 'add item',
                            duration: 3000,
                            position: 'top'
                        });
                        toast.present();
                    }
                }
            ]
        });
        newIngredientAlert.present();
    };
    return EditRecipePage;
}());
EditRecipePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-recipe',template:/*ion-inline-start:"/Users/lixu/learn-ionic/src/pages/edit-recipe/edit-recipe.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>edit-recipe</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="recipeForm" (ngSubmit)="onSubmit()">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Title</ion-label>\n        <ion-input type="text" formControlName="title"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Description</ion-label>\n        <ion-textarea formControlName="description"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Difficulty</ion-label>\n        <ion-select formControlName="difficulty">\n          <ion-option *ngFor="let item of selectionOptions" [value]="item">{{item}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <button ion-button type="button" clear block (click)="onManageIngredients()">Manage Ingredients</button>\n    <ion-list formArrayName="ingredients">\n      <ion-item *ngFor="let item of recipeForm.get(\'ingredients\').controls; let i= index;">\n        <ion-label floating>Name</ion-label>\n        <ion-input type="text" [formControlName]="i"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button type="submit" block color="primaryTwo">{{mode}} Recipe</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/lixu/learn-ionic/src/pages/edit-recipe/edit-recipe.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_recipes__["a" /* RecipesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_recipes__["a" /* RecipesService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _f || Object])
], EditRecipePage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=edit-recipe.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recipes; });
var Recipes = (function () {
    function Recipes(title, description, difficulty, ingredients) {
        this.title = title;
        this.description = description;
        this.difficulty = difficulty;
        this.ingredients = ingredients;
    }
    return Recipes;
}());

//# sourceMappingURL=recipe.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_recipe_edit_recipe__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_recipes__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shopping_list__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecipePage = (function () {
    function RecipePage(navCtrl, navParams, recipesService, shoppingService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.recipesService = recipesService;
        this.shoppingService = shoppingService;
    }
    RecipePage.prototype.ngOnInit = function () {
        this.recipe = this.navParams.get('recipe');
        this.index = this.navParams.get('index');
    };
    // 更新
    RecipePage.prototype.onEditRecipe = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_recipe_edit_recipe__["a" /* EditRecipePage */], { mode: 'Edit', recipe: this.recipe, index: this.index });
    };
    // 添加
    RecipePage.prototype.onAddIngredients = function () {
        this.shoppingService.addItems(this.recipe.ingredients);
    };
    // 删除
    RecipePage.prototype.onDeleteRecipe = function () {
        this.recipesService.removeRecipe(this.index);
        this.navCtrl.popToRoot();
    };
    return RecipePage;
}());
RecipePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-recipe',template:/*ion-inline-start:"/Users/lixu/learn-ionic/src/pages/recipe/recipe.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{recipe?.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n        <h2>{{recipe?.title}}</h2>\n        <div>{{recipe?.difficulty}}</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n        <p>{{recipe?.description}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n        <ion-list>\n          <ion-item *ngFor="let item of recipe?.ingredients">\n            {{item.name}}\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="recipe?.ingredients.length > 0">\n      <ion-col text-center>\n        <button ion-button clear (click)="onAddIngredients()">Add Ingredients to shopping List</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button outline block (click)="onEditRecipe()">Edit Recipe</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button outline block color="danger" (click)="onDeleteRecipe()">Delete Recipe</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/lixu/learn-ionic/src/pages/recipe/recipe.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_recipes__["a" /* RecipesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_recipes__["a" /* RecipesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_shopping_list__["a" /* ShoppingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shopping_list__["a" /* ShoppingListService */]) === "function" && _d || Object])
], RecipePage);

var _a, _b, _c, _d;
//# sourceMappingURL=recipe.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersPage = (function () {
    function UsersPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    UsersPage.prototype.onLoadUser = function (name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user_user__["a" /* UserPage */], { userName: name });
    };
    // ionic 的生命周期
    UsersPage.prototype.ionViewCanEnter = function () {
        console.log('ionViewCanEnter');
        var rad = Math.random();
        return rad > 0.1;
    };
    return UsersPage;
}());
UsersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-users',template:/*ion-inline-start:"/Users/lixu/learn-ionic/src/pages/users/users.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Users</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <p>The Users</p>\n  <button ion-button (click)="onLoadUser(\'Max\')">User \'Max\'</button>\n  <button ion-button (click)="onLoadUser(\'Anna\')">User \'Anna\'</button>\n  <hr>\n  <button ion-button navPop>Go Back</button>\n\n</ion-content>\n\n<ion-footer padding>\n  this is footer!\n</ion-footer>\n'/*ion-inline-end:"/Users/lixu/learn-ionic/src/pages/users/users.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], UsersPage);

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserPage = (function () {
    function UserPage(navParams, navCtrl) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
    }
    UserPage.prototype.ngOnInit = function () {
        this.name = this.navParams.get('userName');
    };
    UserPage.prototype.onGoBack = function () {
        //this.navCtrl.pop(); // 删除并返回数组的最后一个元素
        this.navCtrl.popToRoot(); // 跳转到首页
    };
    return UserPage;
}());
UserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"/Users/lixu/learn-ionic/src/pages/users/user/user.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ name }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <p>I am {{name}}</p>\n  <button ion-button (click)="onGoBack()">Comfirm</button>\n\n</ion-content>\n\n<ion-footer padding>\n\n</ion-footer>\n'/*ion-inline-end:"/Users/lixu/learn-ionic/src/pages/users/user/user.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], UserPage);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_users_users__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_users_user_user__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_favorites_favorites__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_library_library__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_quote_quote__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_quotes_quotes__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_quotes__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_settings__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_list_list__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__component_reset_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__component_second_tab__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_shopping_list_shopping_list__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_edit_recipe_edit_recipe__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_recipe_recipe__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_recipes_recipes__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_shopping_list__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_recipes__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_users_users__["a" /* UsersPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_users_user_user__["a" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_favorites_favorites__["a" /* FavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_library_library__["a" /* LibraryPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_quote_quote__["a" /* QuotePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_quotes_quotes__["a" /* QuotesPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_18__component_reset_component__["a" /* ResetComponent */],
            __WEBPACK_IMPORTED_MODULE_19__component_second_tab__["a" /* SecondTabsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_edit_recipe_edit_recipe__["a" /* EditRecipePage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_recipe_recipe__["a" /* RecipePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_recipes_recipes__["a" /* RecipesPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: []
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_users_users__["a" /* UsersPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_users_user_user__["a" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_favorites_favorites__["a" /* FavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_library_library__["a" /* LibraryPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_quote_quote__["a" /* QuotePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_quotes_quotes__["a" /* QuotesPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_19__component_second_tab__["a" /* SecondTabsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_edit_recipe_edit_recipe__["a" /* EditRecipePage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_recipe_recipe__["a" /* RecipePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_recipes_recipes__["a" /* RecipesPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_15__services_quotes__["a" /* QuotesService */], __WEBPACK_IMPORTED_MODULE_16__services_settings__["a" /* SettingsService */], __WEBPACK_IMPORTED_MODULE_24__services_shopping_list__["a" /* ShoppingListService */], __WEBPACK_IMPORTED_MODULE_25__services_recipes__["a" /* RecipesService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_shopping_list_shopping_list__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_second_tab__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_favorites_favorites__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        this.settingsPage = __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */];
        this.assignment = __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */];
        this.favoritesPage = __WEBPACK_IMPORTED_MODULE_9__pages_favorites_favorites__["a" /* FavoritesPage */];
        this.shoppingPage = __WEBPACK_IMPORTED_MODULE_7__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.onLoad = function (page, idx) {
        this.menuCtrl.close();
        if (idx === 4) {
            this.tabsPage = __WEBPACK_IMPORTED_MODULE_8__component_second_tab__["a" /* SecondTabsPage */];
        }
        else if (idx === 1) {
            this.tabsPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        }
        else {
            this.nav.push(page); // 动态替换rootpage
        }
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('nav'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/lixu/learn-ionic/src/app/app.html"*/'<ion-menu [content]="nav">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item (click)="onLoad(favoritesPage, 1)">\n        <ion-icon name="quote" item-left></ion-icon>Quotes\n      </button>\n      <button ion-item (click)="onLoad(settingsPage)">\n        <ion-icon name="settings" item-left></ion-icon>Settings\n      </button>\n      <button ion-item (click)="onLoad(assignment)">\n        <ion-icon name="list" item-left></ion-icon>Assignments\n      </button>\n      <button ion-item (click)="onLoad(shoppingPage, 4)">\n        <ion-icon name="cart" item-left></ion-icon>shopping\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<ion-nav [root]="tabsPage" #nav></ion-nav>\n'/*ion-inline-end:"/Users/lixu/learn-ionic/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    {
        category: 'inspirational',
        quotes: [
            {
                id: '1',
                person: '李少华',
                text: '骚华'
            },
            {
                id: '2',
                person: 'Norman Vincent Peale',
                text: 'Change your thoughts and you change your world'
            },
            {
                id: '3',
                person: 'Theodore Roosevelt',
                text: 'Believe you can here'
            }
        ],
        icon: 'brush'
    },
    {
        category: 'ability',
        quotes: [
            {
                id: '1',
                person: '李旭',
                text: 'you change your world'
            },
            {
                id: '2',
                person: 'Norman Vincent Peale',
                text: 'Change your thoughts and you change your world'
            }
        ],
        icon: 'bicycle'
    },
    {
        category: 'shopping',
        quotes: [
            {
                id: '1',
                person: 'go to bicycle',
                text: 'you change your world'
            },
            {
                id: '2',
                person: 'Norman Vincent Peale',
                text: 'Change your thoughts and you change your world'
            },
            {
                id: '3',
                person: 'Norman Vincent change',
                text: 'buy something you need'
            },
            {
                id: '4',
                person: 'Norman Vincent Peale',
                text: 'Change your thoughts and you change your world'
            }
        ],
        icon: 'cart'
    },
    {
        category: 'hospital',
        quotes: [
            {
                id: '1',
                person: 'go to hospital',
                text: 'Normally there are no complications with the medicine.'
            }
        ],
        icon: 'medical'
    },
    {
        category: 'cafe',
        quotes: [
            {
                id: '1',
                person: 'go to cyber cafe',
                text: 'We went to a cafe and lazed the whole afternoon away there.'
            }
        ],
        icon: 'cafe'
    },
    {
        category: ' Dog Park',
        quotes: [
            {
                id: '1',
                person: 'go to Park',
                text: 'We went to park the whole afternoon away there.'
            }
        ],
        icon: 'paw'
    },
    {
        category: 'Space',
        quotes: [
            {
                id: '1',
                person: 'go to Park',
                text: 'We went to park the whole afternoon away there.'
            },
            {
                id: '2',
                person: 'go to Space',
                text: 'Normally there are no complications with the medicine.'
            }
        ],
        icon: 'planet'
    }
]);
//# sourceMappingURL=quotes.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ingredient; });
var Ingredient = (function () {
    function Ingredient(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    return Ingredient;
}());

//# sourceMappingURL=ingredient.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_users__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.userPage = __WEBPACK_IMPORTED_MODULE_2__users_users__["a" /* UsersPage */];
    }
    HomePage.prototype.toUsersPage = function () {
        this.navCtrl.push(this.userPage)
            .catch(function (error) { return console.log('Access denied, Argument was' + error); }); //  捕捉错误
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/lixu/learn-ionic/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic 2 Basic\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button (click)="toUsersPage()">Users</button>\n  <!--<button ion-button [navPush]="userPage">Users</button>-->\n</ion-content>\n'/*ion-inline-end:"/Users/lixu/learn-ionic/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResetComponent = (function () {
    function ResetComponent() {
        this.didReset = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ResetComponent.prototype.onResets = function (type) {
        this.didReset.emit(type);
    };
    return ResetComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], ResetComponent.prototype, "didReset", void 0);
ResetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-reset',
        template: "\n    <ion-row>\n      <ion-col>\n        <button ion-button color=\"danger\" small block (click)=\"onResets('all')\">\n           Reset All\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color=\"danger\" small block (click)=\"onResets('tap')\">\n          Reset Taps\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color=\"danger\" small block (click)=\"onResets('press')\">\n           Reset Presses\n        </button>\n      </ion-col>\n    </ion-row>\n  "
    })
], ResetComponent);

//# sourceMappingURL=reset.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_quotes__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quote_quote__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_settings__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FavoritesPage = (function () {
    function FavoritesPage(navCtrl, quoteService, modalCtrl, settingsService) {
        this.navCtrl = navCtrl;
        this.quoteService = quoteService;
        this.modalCtrl = modalCtrl;
        this.settingsService = settingsService;
    }
    FavoritesPage.prototype.ngOnInit = function () {
    };
    FavoritesPage.prototype.ionViewWillEnter = function () {
        this.quotes = this.quoteService.getQuoteFavorite();
    };
    FavoritesPage.prototype.onFavorite = function (quote) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__quote_quote__["a" /* QuotePage */], quote);
        modal.present();
        modal.onDidDismiss(function (remove) {
            if (remove) {
                _this.onRemoveFromFavorites(quote);
            }
        });
    };
    ;
    FavoritesPage.prototype.onRemoveFromFavorites = function (quote) {
        this.quoteService.removeQuoteFromFavorites(quote);
        var position = this.quotes.findIndex(function (quoteEl) {
            return quoteEl.id == quote.id;
        });
        this.quotes.splice(position, 1);
    };
    // 按钮选中改变背景色
    FavoritesPage.prototype.changeBackground = function () {
        return this.settingsService.isAltBackground();
    };
    return FavoritesPage;
}());
FavoritesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-favorites',template:/*ion-inline-start:"/Users/lixu/learn-ionic/src/pages/favorites/favorites.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Favorites Quotes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-sliding *ngFor="let quote of quotes">\n      <ion-item\n        color="quoteBackground"\n        [ngClass]="{alt: changeBackground()}"\n        (click)="onFavorite(quote)">\n        <h3>{{quote.person}}</h3>\n        <p>{{quote.text}}</p>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="danger" (click)="onRemoveFromFavorites(quote)"><ion-icon name="trash"></ion-icon>Delete</button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/lixu/learn-ionic/src/pages/favorites/favorites.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__services_quotes__["a" /* QuotesService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4__services_settings__["a" /* SettingsService */]])
], FavoritesPage);

//# sourceMappingURL=favorites.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map