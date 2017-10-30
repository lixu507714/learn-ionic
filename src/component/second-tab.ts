import {Component} from '@angular/core';
import {RecipesPage} from "../pages/recipes/recipes";
import {ShoppingListPage} from "../pages/shopping-list/shopping-list";

@Component({
  selector: 'page-tabs-second',
  template: `
    <ion-tabs>
      <ion-tab [root]="slpage" color="primaryTwo" tabTitle="Shopping List" tabIcon="list-box"></ion-tab>
      <ion-tab [root]="recipesPage" tabTitle="Recipes" tabIcon="book"></ion-tab>
    </ion-tabs>
  `
})

export class SecondTabsPage {
  slpage = ShoppingListPage;
  recipesPage = RecipesPage;
}
