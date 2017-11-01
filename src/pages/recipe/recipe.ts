import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Recipes} from "../../models/recipe";
import {EditRecipePage} from "../edit-recipe/edit-recipe";
import {RecipesService} from "../../services/recipes";
import {ShoppingListService} from "../../services/shopping-list";

@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class RecipePage implements OnInit{

  recipe: Recipes;
  index: number;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private recipesService: RecipesService,
              private shoppingService: ShoppingListService) {
  }

  ngOnInit() {
        this.recipe = this.navParams.get('recipe');
        this.index = this.navParams.get('index');
  }

  // 更新
  onEditRecipe() {
    this.navCtrl.push(EditRecipePage, {mode: 'Edit', recipe: this.recipe, index: this.index})
  }

  // 添加
  onAddIngredients() {
    this.shoppingService.addItems(this.recipe.ingredients);
  }

  // 删除
  onDeleteRecipe() {
    this.recipesService.removeRecipe(this.index);
    this.navCtrl.popToRoot();
  }
}
