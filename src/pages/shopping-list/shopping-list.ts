import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {ShoppingListService} from "../../services/shopping-list";
import {Ingredient} from "../../models/ingredient";

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  ingredientList : Ingredient[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private slService: ShoppingListService) {
  }

  onAddItem(form: NgForm) {
    this.slService.addItem(form.value.ingredientName, form.value.amount);
    form.reset();
    this.ingredientItem();
  }

  private ingredientItem() {
    this.ingredientList = this.slService.getItems();
  }

  deleteItem(index) {
    this.slService.removeItem(index);
    this.ingredientItem();
  }
}
